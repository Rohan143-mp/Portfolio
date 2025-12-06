"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Certificates from "@/components/certificates"
import Skills from "@/components/skills"
import Footer from "@/components/footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="w-full min-h-screen bg-background">
      <Header />
      <Hero />
      <Projects />
      <Certificates />
      <Skills />
      <Footer />
    </main>
  )
}
