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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text leading-tight">
                Rohan Pednekar
              </h1>
              <p className="text-xl text-accent font-semibold animate-text-shimmer bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-[length:200%_auto]">
                Full Stack Developer & AI/ML Specialist
              </p>
            </div>

            <p className="text-foreground/70 text-lg leading-relaxed animate-fade-in-up">
              Aspiring Software Developer specializing in AI/ML and Full-Stack development, with hands-on hackathon
              experience and strong programming fundamentals. Finalist in 4 prestigious hackathons (2025).
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-all hover:scale-105 flex items-center gap-2 font-semibold"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="https://github.com/Rohan143-mp"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-accent text-accent hover:bg-accent/10 transition-all hover:scale-105 flex items-center gap-2 font-semibold"
              >
                GitHub Profile
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold gradient-text">13+</div>
                <p className="text-foreground/60 text-sm">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">4</div>
                <p className="text-foreground/60 text-sm">Hackathon Finalist</p>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">10+</div>
                <p className="text-foreground/60 text-sm">Skills Mastered</p>
              </div>
            </div>
          </div>

          {/* Right - 3D Profile Image */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="relative w-full max-w-sm h-96">
              <div className="absolute inset-16 animate-spin-slow">
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 border-dashed" />
              </div>
              <div className="absolute inset-20 animate-spin-reverse">
                <div className="absolute inset-0 rounded-full border-2 border-accent/30 border-dotted" />
              </div>

              {/* Glowing background effects */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-3xl animate-pulse" />
              <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-accent/20 to-primary/20 blur-2xl" />

              <div
                className="relative h-full rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:border-accent/50"
                style={{
                  boxShadow:
                    "0 25px 70px rgba(88, 166, 255, 0.4), 0 0 40px rgba(168, 85, 247, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.2)",
                }}
              >
                {/* Profile image with transparent background */}
                <div className="relative w-full h-full bg-transparent">
                  <Image
                    src="/images/profile.jpg"
                    alt="Rohan Pednekar Profile"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating particles around profile */}
              <div className="absolute top-10 -right-4 w-16 h-16 bg-accent/40 rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-10 -left-4 w-20 h-20 bg-primary/40 rounded-full blur-2xl animate-float-delayed" />
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-purple-500/30 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
