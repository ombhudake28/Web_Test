"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import FacultyCard from "@/components/cards/faculty-card"

// Sample faculty data - replace with API call
const facultyMembers = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    designation: "Faculty Coordinator",
    role: "Arts & Crafts Mentor",
    image: "/faculty-academic-mentor-portrait.jpg",
  },
  {
    id: 2,
    name: "Prof. David Kumar",
    designation: "Co-Coordinator",
    role: "Technology Advisor",
    image: "/faculty-technology-advisor-portrait.jpg",
  },
  {
    id: 3,
    name: "Dr. Emily Richardson",
    designation: "Faculty Advisor",
    role: "Creative Direction Lead",
    image: "/faculty-creative-director-portrait.jpg",
  },
  {
    id: 4,
    name: "Prof. Michael Chang",
    designation: "Co-Coordinator",
    role: "Event Planning Consultant",
    image: "/faculty-event-planning-portrait.jpg",
  },
]

export default function FacultyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? facultyMembers.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === facultyMembers.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Faculty Coordinators</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced mentors guiding and supporting our club members
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Desktop Carousel - Show 2 cards */}
          <div className="hidden md:grid grid-cols-2 gap-6 mb-8">
            {[0, 1].map((offset) => {
              const index = (currentIndex + offset) % facultyMembers.length
              return (
                <div key={offset} className="transform transition-all duration-500 hover:scale-105">
                  <FacultyCard member={facultyMembers[index]} />
                </div>
              )
            })}
          </div>

          {/* Mobile Carousel - Show 1 card */}
          <div className="md:hidden flex justify-center mb-8">
            <div className="w-full max-w-sm transform transition-all duration-500">
              <FacultyCard member={facultyMembers[currentIndex]} />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-110"
              aria-label="Previous faculty member"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-110"
              aria-label="Next faculty member"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {facultyMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-accent w-8" : "bg-muted-foreground"
                }`}
                aria-label={`Go to faculty member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
