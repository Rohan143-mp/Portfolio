"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth * 2
    canvas.height = canvas.offsetHeight * 2
    ctx.scale(2, 2)

    const particles: any[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.25,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(8, 20, 50, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillStyle = `rgba(88, 166, 255, ${p.opacity})`
        ctx.fillRect(p.x, p.y, p.size, p.size)
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl h-full flex items-center py-20 md:py-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-3 md:space-y-4 animate-slide-in">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight break-words overflow-wrap-anywhere">
                Rohan Mahesh Pednekar
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-accent font-semibold animate-text-shimmer bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-[length:200%_auto]">
                Full Stack Developer & AI/ML Specialist
              </p>
            </div>

            <p className="text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed animate-fade-in-up">
              Aspiring Software Developer specializing in AI/ML and Full-Stack development, with hands-on hackathon
              experience and strong programming fundamentals. Finalist in 4 prestigious hackathons (2025).
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a
                href="#projects"
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-all hover:scale-105 flex items-center gap-2 font-semibold text-xs sm:text-sm md:text-base"
              >
                View My Work
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="https://github.com/Rohan143-mp"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-accent text-accent hover:bg-accent/10 transition-all hover:scale-105 flex items-center gap-2 font-semibold text-xs sm:text-sm md:text-base"
              >
                GitHub Profile
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>

            <div className="flex gap-4 sm:gap-6 pt-2">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">13+</div>
                <p className="text-foreground/60 text-xs sm:text-sm">Projects Completed</p>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">4</div>
                <p className="text-foreground/60 text-xs sm:text-sm">Hackathon Finalist</p>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">10+</div>
                <p className="text-foreground/60 text-xs sm:text-sm">Skills Mastered</p>
              </div>
            </div>
          </div>

          {/* Right - Profile Image with Transparent Background */}
          <div className="relative flex items-center justify-center md:justify-start mt-8 md:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
              {/* 3D Circle behind profile photo - smaller than photo */}
              <div className="absolute inset-4 sm:inset-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 blur-sm -z-10 transform translate-x-0 md:translate-x-[7.25rem] translate-y-2 -translate-y-2 md:-translate-y-4" />
              <div className="relative w-full h-full rounded-full overflow-hidden transform translate-x-0 md:translate-x-[7.25rem] -translate-y-2 md:-translate-y-4">
                <Image
                  src="./images/profile.png"
                  alt="Rohan M Pednekar Profile"
                  fill
                  className="object-contain object-center"
                  priority
                  style={{ background: 'transparent' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
