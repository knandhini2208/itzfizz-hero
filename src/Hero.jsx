import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Car from './Car'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const HEADLINE = 'WELCOME ITZFIZZ'
const STATS = [
  { value: 58, label: 'Increase in pick up point use' },
  { value: 23, label: 'Decrease in customer phone calls' },
  { value: 27, label: 'Increase in customer satisfaction' },
  { value: 40, label: 'Decrease in average wait time' },
]

export default function Hero() {
  const root = useRef(null)

  useGSAP(
    () => {
      // 1. Intro animation (runs once on load)
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('.car-inner', { opacity: 0, scale: 0.9, duration: 1.2 })
        .from('.letter', { y: 40, opacity: 0, duration: 0.9, stagger: 0.05 }, 0.2)
        .from('.stat', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15 }, '-=0.4')
        .from(
          '.stat-num',
          { textContent: 0, duration: 1.6, ease: 'power1.out', snap: { textContent: 1 }, stagger: 0.15 },
          '<'
        )

      // 2. Scroll animation (tied to scroll progress)
      gsap
        .timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=2200',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        .fromTo(
          '.car-wrap',
          { x: () => window.innerWidth * 0.06 },
          { x: () => window.innerWidth, duration: 1 },
          0
        )
        .to('.road-lines', { xPercent: -50, duration: 1 }, 0)
        .fromTo(
          '.letter',
          { color: '#6b6b78' },
          { color: '#ffffff', duration: 0.1, stagger: { amount: 0.75 } },
          0.1
        )
    },
    { scope: root }
  )

  return (
    <section
      ref={root}
      className="relative h-screen w-full overflow-hidden bg-[#0b0b0f] text-white"
    >
      <h1
        aria-label={HEADLINE}
        className="absolute inset-x-0 top-[12%] flex flex-wrap justify-center gap-x-[0.5em] px-4 text-[clamp(1.25rem,4.5vw,4rem)] font-light"
      >
        {HEADLINE.split('').map((ch, i) =>
          ch === ' ' ? (
            <span key={i} className="w-[1em]" />
          ) : (
            <span key={i} className="letter inline-block will-change-transform">
              {ch}
            </span>
          )
        )}
      </h1>

      <div className="absolute inset-x-0 top-1/2 h-[clamp(130px,22vh,220px)] -mt-[clamp(65px,11vh,110px)] bg-[#15151c]">
        <div className="relative h-full w-full overflow-hidden">
          <div
className="road-lines absolute top-1/2 left-0 h-1 w-[200%] will-change-transform"            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, #ffffff55 0 60px, transparent 60px 120px)',
            }}
          />
        </div>
        <div className="car-wrap absolute inset-y-0 left-0 flex items-center will-change-transform">
          <div className="car-inner">
            <Car className="w-[clamp(180px,26vw,380px)]" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[7%] mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="stat">
            <div className="text-4xl font-semibold text-[#ff5a1f] md:text-6xl">
              <span className="stat-num">{s.value}</span>%
            </div>
            <p className="mt-2 text-sm text-white/60 md:text-base">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}