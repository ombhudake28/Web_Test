"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TeamCard from "@/components/cards/team-card"

// Sample team data - replace with API call
const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Creative Lead",
    image: "/young-creative-professional-portrait.jpg",
    description: "Passionate about digital art and UI design. Always exploring new creative techniques.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Community Manager",
    image: "/friendly-community-manager-portrait.jpg",
    description: "Connects members and organizes amazing events. Heart of our community.",
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Tech Coordinator",
    image: "/tech-enthusiast-developer-portrait.jpg",
    description: "Tech wizard who keeps everything running. Loves coding and gaming.",
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Designer",
    image: "/graphic-designer-creative-portrait.jpg",
    description: "Visual storyteller with a passion for branding and illustration.",
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Event Specialist",
    image: "/event-organizer-professional-portrait.jpg",
    description: "Master planner who creates unforgettable experiences for our members.",
  },
]

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Talented individuals driving our community forward with creativity and passion
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Desktop Carousel - Show 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % teamMembers.length
              return (
                <div key={offset} className="transform transition-all duration-500 hover:scale-105">
                  <TeamCard member={teamMembers[index]} />
                </div>
              )
            })}
          </div>

          {/* Mobile Carousel - Show 1 card */}
          <div className="md:hidden flex justify-center mb-8">
            <div className="w-full max-w-sm transform transition-all duration-500">
              <TeamCard member={teamMembers[currentIndex]} />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-110"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-110"
              aria-label="Next team member"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground"
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
