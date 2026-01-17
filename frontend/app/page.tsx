"use client"

import { useState } from "react"
import HeroSection from "@/components/sections/hero-section"
import TeamCarousel from "@/components/sections/team-carousel"
import FacultyCarousel from "@/components/sections/faculty-carousel"
import EventsSection from "@/components/sections/events-section"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import GallerySection from "@/components/sections/gallery-section"

export default function Page() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection />
      <FacultyCarousel />
      <TeamCarousel />
      <EventsSection />
      <GallerySection />
      <Footer />
    </main>
  )
}
