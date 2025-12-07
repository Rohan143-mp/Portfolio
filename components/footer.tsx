"use client"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative w-full bg-card border-t border-border py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                RP
              </div>
              <span className="font-bold text-foreground">Rohan Pednekar</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Full Stack Developer & AI/ML Specialist crafting innovative digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "Projects", href: "#projects" },
                { label: "Certificates", href: "#certificates" },
                { label: "Skills", href: "#skills" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-accent transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={14} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:pednekarrohan43@gmail.com"
                  className="text-foreground/60 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  Email
                </a>
              </li>
              <li>
                <p className="text-foreground/60">📱 +91 97664 15141</p>
              </li>
              <li>
                <p className="text-foreground/60">📍 Alibag, Raigad, Maharashtra</p>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Rohan143-mp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 text-accent flex items-center justify-center transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rohan-pednekar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 text-accent flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:pednekarrohan43@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 text-accent flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-foreground/60 text-sm text-center">© {currentYear} Rohan Pednekar. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
