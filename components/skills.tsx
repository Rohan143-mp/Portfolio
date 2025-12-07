"use client"

import { useEffect, useRef, useState } from "react"

interface Skill {
  name: string
  icon: string
  color: string
  level: number
  logo?: string
}

const skills: Skill[] = [
  {
    name: "Python",
    icon: "🐍",
    color: "#3776AB",
    level: 95,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    icon: "⚡",
    color: "#F7DF1E",
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "⚛️",
    color: "#61DAFB",
    level: 88,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "🟢",
    color: "#68A063",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Java",
    icon: "☕",
    color: "#007396",
    level: 92,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "SQL",
    icon: "🗄️",
    color: "#336791",
    level: 88,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Machine Learning",
    icon: "🤖",
    color: "#FF6F00",
    level: 87,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "Docker",
    icon: "🐳",
    color: "#2496ED",
    level: 82,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "📂",
    color: "#F1502F",
    level: 93,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "TypeScript",
    icon: "📘",
    color: "#3178C6",
    level: 86,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    color: "#13AA52",
    level: 84,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PHP",
    icon: "🐘",
    color: "#777BB4",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "C",
    icon: "©️",
    color: "#A8B9CC",
    level: 88,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "VB.NET",
    icon: "🔷",
    color: "#5C2D91",
    level: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },
  {
    name: "Express.js",
    icon: "🚂",
    color: "#000000",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "🅱️",
    color: "#7952B3",
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
]

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

interface MouseTrail {
  x: number
  y: number
  opacity: number
}

export default function Skills() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [mouseTrail, setMouseTrail] = useState<MouseTrail[]>([])
  const trailRef = useRef<MouseTrail[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const newParticles: Particle[] = []
    for (let i = 0; i < 40; i++) {
      newParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 3,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }
    setParticles(newParticles)

    const animate = () => {
      ctx.fillStyle = "rgba(8, 20, 50, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      newParticles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillStyle = `rgba(88, 166, 255, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const newTrail = [
          { x, y, opacity: 1 },
          ...trailRef.current.slice(0, 20).map((point, i) => ({
            ...point,
            opacity: 1 - i / 20,
          })),
        ]

        trailRef.current = newTrail
        setMouseTrail(newTrail)
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener("mousemove", handleMouseMove)
      return () => section.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full py-20 px-4 bg-gradient-to-b from-background via-card/20 to-background overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />

      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.8)" />
            <stop offset="50%" stopColor="rgba(88, 166, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.3)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {mouseTrail.length > 1 && (
          <path
            d={`M ${mouseTrail.map((point, i) => `${point.x},${point.y}`).join(" L ")}`}
            fill="none"
            stroke="url(#trailGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
            filter="url(#glow)"
          />
        )}
        {mouseTrail.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r={4 - (i / mouseTrail.length) * 3}
            fill="rgba(168, 85, 247, 0.6)"
            opacity={point.opacity}
            filter="url(#glow)"
          />
        ))}
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Technical Skills</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Mastery across modern technologies and frameworks
          </p>
        </div>

        {/* Skills Grid - Floating Bubbles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center group animate-slide-in relative"
              style={{ animationDelay: `${index * 0.05}s` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Bubble */}
              <div
                className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex flex-col items-center justify-center cursor-pointer group-hover:scale-110 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/30 animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Inner circle */}
                <div className="absolute inset-2 rounded-full bg-card border border-primary/20 flex flex-col items-center justify-center">
                  {/* Logo */}
                  {skill.logo ? (
                    <img
                      src={skill.logo || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-12 h-12 object-contain group-hover:scale-125 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-4xl mb-1 group-hover:scale-125 transition-transform">{skill.icon}</span>
                  )}
                </div>

                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-full bg-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none" />
              </div>

              <div
                className={`mt-4 text-center transition-all duration-300 ${hoveredSkill === skill.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              >
                <p className="text-sm font-semibold text-foreground mb-2">{skill.name}</p>
                <div className="w-28 h-2 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700"
                    style={{ width: hoveredSkill === skill.name ? `${skill.level}%` : "0%" }}
                  />
                </div>
                <p className="text-xs text-foreground/60 mt-1">{skill.level}%</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors">
            <h3 className="text-2xl font-bold text-foreground mb-4">Programming Languages</h3>
            <div className="space-y-3">
              {["Python", "Java", "JavaScript", "TypeScript", "SQL", "PHP", "C", "VB.NET"].map((lang) => (
                <div key={lang} className="flex items-center justify-between">
                  <span className="text-foreground/70">{lang}</span>
                  <div className="w-32 h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      style={{ width: `${skills.find((s) => s.name === lang)?.level || 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors">
            <h3 className="text-2xl font-bold text-foreground mb-4">Specializations</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "AI/ML",
                "Full-Stack Dev",
                "Web Development",
                "Desktop Apps",
                "DevOps",
                "Data Analysis",
                "Express.js",
                "Bootstrap",
              ].map((spec) => (
                <span
                  key={spec}
                  className="px-4 py-2 rounded-full bg-primary/20 text-accent font-medium text-sm hover:bg-primary/30 transition-colors cursor-pointer"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
