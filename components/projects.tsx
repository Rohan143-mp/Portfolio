"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  description: string
  technologies: string[]
  image: string
  github?: string
  link?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Legal-Verifier",
    category: "AI & Machine Learning",
    description:
      "Advanced AI-powered legal document verification system using machine learning algorithms for automated document analysis and fraud detection.",
    technologies: ["Python","React", "Node.js", "ML", "NLP"],
    image: "./ai-legal-document-verification-interface.jpg",
    github: "https://github.com/Rohan143-mp/AI-Legal-Verifier",
    featured: true,
  },
  {
    id: 2,
    title: "Indian-Music-Recommendation-System",
    category: "AI & Machine Learning",
    description:
      "ML-based recommendation engine for Indian music with personalized suggestions using collaborative filtering and content-based algorithms.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    image: "./music-recommendation-system-dashboard.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Signify",
    category: "Web Development",
    description:
      "Dynamic web application with modern UI/UX principles, responsive design, and real-time features for interactive user engagement.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "./modern-web-app-interface.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Echo-Box",
    category: "Software & Desktop",
    description:
      "Interactive desktop application for audio processing, management, and real-time audio visualization with advanced sound controls.",
    technologies: ["Java", "Audio API", "Swing"],
    image: "./audio-processing-application.jpg",
    featured: true,
  },
  {
    id: 5,
    title: "LEEZA (Voice Assistant)",
    category: "AI & Machine Learning",
    description:
      "Advanced voice assistant powered by AI with natural language processing capabilities for voice recognition and command execution.",
    technologies: ["Python", "NLP", "Speech Recognition"],
    image: "./voice-assistant-interface.png",
    featured: true,
  },
  {
    id: 6,
    title: "NetTalk - Java Chat Server",
    category: "Software & Desktop",
    description:
      "Real-time chat application with socket programming and multi-user support for seamless peer-to-peer communication.",
    technologies: ["Java", "Socket Programming", "Threading"],
    image: "./chat-application-messaging-interface.jpg",
    featured: true,
  },
  {
    id: 7,
    title: "House-Rental-Management",
    category: "Web Development",
    description:
      "Full-stack rental management system with booking, payment integration, and property management features for landlords and tenants.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: "./property-rental-management-dashboard.jpg",
    featured: false,
  },
  {
    id: 8,
    title: "Apolo-Hospital-Management",
    category: "Software & Desktop",
    description:
      "Comprehensive hospital management system with patient records, scheduling, billing, and appointment management capabilities.",
    technologies: ["VB.NET", "SQL Server", "Windows Forms"],
    image: "./hospital-management-system-interface.jpg",
    featured: false,
  },
  {
    id: 9,
    title: "StealthGuard-VPN",
    category: "Software & Desktop",
    description:
      "Secure VPN application with encryption, network privacy features, and anonymous browsing capabilities for secure internet access.",
    technologies: ["Java", "Cryptography", "Networking"],
    image: " ./vpn-security-application.jpg",
    featured: false,
  },
  {
    id: 10,
    title: "Snake-Game-Using-C-Graphics",
    category: "Software & Desktop",
    description:
      "Classic snake game implementation in C using graphics library with interactive gameplay and score tracking.",
    technologies: ["C", "Graphics Library"],
    image: "./snake-game-graphics.jpg",
    featured: false,
  },
  {
    id: 11,
    title: "Pest-Control-Services-Website",
    category: "Web Development",
    description:
      "Professional website for pest control services with service listings, booking system, and customer testimonials.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    image: "./pest-control-services-website.jpg",
    featured: false,
  },
  {
    id: 12,
    title: "Blood-Donation-Booking",
    category: "Web Development",
    description:
      "Blood donation platform connecting donors and recipients with scheduling, donor management, and medical history tracking.",
    technologies: ["React Native", "Node.js", "MongoDB"],
    image: "./blood-donation-booking-platform.jpg",
    featured: false,
  },
  {
    id: 13,
    title: "DevOps Practical Repo",
    category: "Other",
    description:
      "Comprehensive DevOps implementation with CI/CD pipelines, containerization, and infrastructure automation practices.",
    technologies: ["Docker", "Kubernetes", "Jenkins"],
    image: "./devops-infrastructure-dashboard.jpg",
    featured: false,
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleProjectClick = (project: Project) => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer")
    } else if (project.github) {
      window.open(project.github, "_blank", "noopener,noreferrer")
    } else {
      setSelectedProject(project)
    }
  }

  return (
    <section
      id="projects"
      className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card/30 to-background"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">Featured Projects</h2>
          <p className="text-foreground/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Explore my diverse portfolio of 13+ projects spanning AI/ML, web development, and desktop applications
          </p>
        </div>

        <div className="relative group">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth hide-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="flex-shrink-0 w-[85vw] sm:w-96 md:w-[28rem] group/card cursor-pointer snap-center transition-all duration-500 hover:scale-125 hover:z-10 group-hover:scale-90 group-hover/card:scale-125"
              >
                <div className="relative rounded-3xl overflow-hidden bg-card border border-border transition-all duration-500 h-80 hover:border-accent/50 hover:shadow-2xl hover:shadow-primary/20">
                  {/* Full Image Container */}
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 rounded-3xl"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-accent/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                    {/* Radiant glow background effect */}
                    <div className="absolute inset-0 bg-gradient-radial from-accent/60 via-primary/40 to-transparent blur-xl" />

                    {/* Content */}
                    <div className="relative z-10 text-white space-y-3 animate-fade-in-up">
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/80">{project.category}</p>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-white/90 mb-4 line-clamp-3">{project.description}</p>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2 justify-center items-center max-w-full">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs text-white/70 mt-2">Click to view project</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-2 rounded-full bg-primary/80 text-white hover:bg-primary transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-2 rounded-full bg-primary/80 text-white hover:bg-primary transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  )
}
