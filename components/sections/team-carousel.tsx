"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TeamCard from "@/components/cards/team-card"

// Sample team data - replace with API call
const teamMembers = [
   {
    id: 1,
    name: "Aditya Ahire",
    role: "Past President",
    image: "/young-creative-professional-portrait.jpg",
    description: "Provided strong leadership and laid a solid foundation for the Hobby Club’s growth.",
  },
  {
    id: 1,
    name: "Om Bhudake",
    role: "President",
    image: "/young-creative-professional-portrait.jpg",
    description: "Leads the Hobby Club, takes final decisions, and represents the club in official activities.",
  },
  {
    id: 2,
    name: "Bhagyashree Sahani",
    role: "Vice President",
    image: "/bhageshree_di.jpeg",
    description: "Supports the President and manages club work when the President is unavailable.",
  },
  {
    id: 3,
    name: "Dnyanesh Kawadkar",
    role: "Technical Head",
    image: "/dnyanesh.jpeg",
    description: "Handles technical work like website, posters, and digital support for events.",
  },
  {
    id: 4,
    name: "Shantanu Aher",
    role: "Treasurer",
    image: "/graphic-designer-creative-portrait.jpg",
    description: "Manages funds, keeps records of income and expenses of the club.",
  },
  {
    id: 5,
    name: "Yamini Ghagre",
    role: "Event Manager",
    image: "/yamini.jpeg",
    description: "Plans and manages events, competitions, and activities of the Hobby Club..",
  },
  {
    id: 1,
    name: "Sakshi Khonde",
    role: "Head oragnizer",
    image: "/sakshi.jpeg",
    description: "Organizes volunteers and ensures smooth execution of all events.",
  },
  {
    id: 2,
    name: "Ritesh Daud",
    role: "Executive Member",
    image: "/friendly-community-manager-portrait.jpg",
    description: "Helps in planning, promotion, and successful execution of club activities.",
  },
  {
    id: 3,
    name: "Chaitanya Farkade",
    role: "Executive Member",
    image: "/tech-enthusiast-developer-portrait.jpg",
    description: "Helps in planning, promotion, and successful execution of club activities.",
  },
  {
    id: 4,
    name: "Anagha Kenodkar",
    role: "Executive Member",
    image: "/anagha.png",
    description: "Helps in planning, promotion, and successful execution of club activities.",
  },
  {
    id: 5,
    name: "Pooja Aaglave",
    role: "Executive Member",
    image: "/pooja.jpeg",
    description: "Helps in planning, promotion, and successful execution of club activities.",
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
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Core Committee</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The official team of student members responsible for organizing and managing all Hobby Club activities at Government Polytechnic Nagpur.
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
