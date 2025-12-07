"use client"

import { useState, useRef } from "react"
import { Award, ChevronLeft, ChevronRight } from "lucide-react"

interface Certificate {
  id: number
  title: string
  organizer: string
  year: string
  type: "hackathon" | "training" | "competition" | "certification"
  image: string
  description: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Finalist – Pixel Palettes Hackathon",
    organizer: "Manipal University, Jaipur",
    year: "2025",
    type: "hackathon",
    image: "/pixel-palettes-hackathon-certificate.jpg",
    description:
      "Finalist in prestigious Pixel Palettes Hackathon showcasing innovative solutions and technical excellence in competitive programming.",
  },
  {
    id: 2,
    title: "Finalist – CodeByte Hackathon",
    organizer: "Lokmanya Tilak College of Engineering",
    year: "2025",
    type: "hackathon",
    image: "/codebyte-hackathon-certificate.jpg",
    description:
      "Finalist award for outstanding performance in CodeByte Hackathon competition with innovative problem-solving approach.",
  },
  {
    id: 3,
    title: "Finalist – Code Storm Hackathon",
    organizer: "DIT University, Dehradun",
    year: "2025",
    type: "hackathon",
    image: "/code-storm-hackathon-certificate.jpg",
    description:
      "Finalist achievement in Code Storm Hackathon demonstrating advanced problem-solving abilities and technical skills.",
  },
  {
    id: 4,
    title: "Finalist – TSEC CodeStorm",
    organizer: "Thadomal Shahani Engineering College, Mumbai",
    year: "2025",
    type: "hackathon",
    image: "/tsec-codestorm-hackathon-certificate.jpg",
    description:
      "Finalist recognition at TSEC CodeStorm showcasing excellence in coding and innovative solution development.",
  },
  {
    id: 5,
    title: "State Level Technical Quiz",
    organizer: "Pillai HOC College of Engineering, Rasayani",
    year: "2023",
    type: "competition",
    image: "/state-level-technical-quiz-certificate.jpg",
    description:
      "Participated in state-level technical quiz competition showcasing comprehensive technical knowledge and quick thinking.",
  },
  {
    id: 6,
    title: "6 Weeks Industrial IT Internship",
    organizer: "RCF Ltd. (Govt. of India, Thal, Raigad)",
    year: "2023",
    type: "training",
    image: "/industrial-training-certificate-it.jpg",
    description:
      "Completed 6-week IT trainee program at RCF (Rashtriya Chemicals & Fertilizers Ltd.) with hands-on technical experience.",
  },
  {
    id: 7,
    title: "MS-CIT Certification",
    organizer: "Government Authorized",
    year: "2022",
    type: "certification",
    image: "/ms-cit-certificate-information-technology.jpg",
    description:
      "Maharashtra State Certificate in Information Technology demonstrating comprehensive IT proficiency and knowledge.",
  },
]

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)
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

  return (
    <section id="certificates" className="relative w-full py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="text-accent" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Achievements & Certificates</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Recognition of my technical excellence and participation in competitive events
          </p>
        </div>

        <div className="relative group">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth hide-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="flex-shrink-0 w-96 group/cert cursor-pointer snap-center transition-all duration-500 hover:scale-110 hover:z-10"
              >
                <div className="relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 h-80 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20">
                  {/* Full Image Container */}
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-accent via-purple-600/80 to-transparent opacity-0 group-hover/cert:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                    {/* Radiant glow background effect */}
                    <div className="absolute inset-0 bg-gradient-radial from-purple-500/60 via-accent/40 to-transparent blur-xl" />

                    {/* Content */}
                    <div className="relative z-10 text-white space-y-3 animate-fade-in-up">
                      <Award className="mx-auto mb-3" size={40} />
                      <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-sm text-white/90 mb-2">{cert.organizer}</p>
                      <p className="text-lg font-bold text-white/95">{cert.year}</p>
                      <p className="text-xs text-white/70 mt-3">Click to view details</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-2 rounded-full bg-accent/80 text-white hover:bg-accent transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-2 rounded-full bg-accent/80 text-white hover:bg-accent transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Modal for Certificate Details */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="w-full max-w-2xl bg-card border border-border rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Certificate Image */}
              <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden flex items-center justify-center p-8">
                <img
                  src={selectedCert.image || "/placeholder.svg"}
                  alt={selectedCert.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mt-2">{selectedCert.title}</h3>
                    <p className="text-accent text-sm font-semibold mt-2">{selectedCert.organizer}</p>
                  </div>
                  <p className="text-2xl font-bold gradient-text">{selectedCert.year}</p>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-foreground/70">{selectedCert.description}</p>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
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
