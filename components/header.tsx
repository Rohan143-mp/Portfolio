"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-primary/20">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden border-2 border-primary/50 p-1">
            <Image src="./images/logo.png" alt="RP Logo" width={32} height={32} className="object-contain w-full h-full" />
          </div>
          <span className="text-base sm:text-lg md:text-xl font-bold gradient-text hidden sm:block break-words">Rohan M Pednekar</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground/70 hover:text-accent hover:scale-110 transition-all duration-300 text-sm font-medium relative group/nav"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover/nav:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="https://github.com/Rohan143-mp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 hover:scale-110 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-primary/50"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-card rounded-lg transition-colors">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-card border-b border-border md:hidden">
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/70 hover:text-accent transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://github.com/Rohan143-mp"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors text-sm font-medium text-center"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
