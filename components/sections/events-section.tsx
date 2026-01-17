"use client"

import { useState } from "react"
import EventCard from "@/components/cards/event-card"

// Sample events data - replace with API call
const upcomingEvents = [
  {
    id: 1,
    name: "Digital Art Workshop",
    date: "2024-02-15",
    time: "18:00",
    venue: "Art Studio Building, Room 301",
    description: "Learn advanced digital illustration techniques with industry professionals.",
    category: "Workshop",
  },
  {
    id: 2,
    name: "Photography Meetup",
    date: "2024-02-18",
    time: "10:00",
    venue: "Campus Grounds",
    description: "Explore photography tips and tricks while capturing beautiful campus moments.",
    category: "Meetup",
  },
  {
    id: 3,
    name: "Creative Writing Session",
    date: "2024-02-22",
    time: "19:00",
    venue: "Library Conference Room",
    description: "Share and discuss creative stories, poetry, and manuscripts with fellow writers.",
    category: "Session",
  },
  {
    id: 4,
    name: "3D Modeling Masterclass",
    date: "2024-02-25",
    time: "17:00",
    venue: "Computer Lab, Building B",
    description: "Dive into the world of 3D modeling and learn industry-standard tools.",
    category: "Workshop",
  },
  {
    id: 5,
    name: "Monthly Showcase Gala",
    date: "2024-03-01",
    time: "19:30",
    venue: "Grand Hall Auditorium",
    description: "Celebrate our members' work with an evening of performances and exhibitions.",
    category: "Event",
  },
  {
    id: 6,
    name: "Crafts & DIY Fair",
    date: "2024-03-05",
    time: "14:00",
    venue: "Outdoor Courtyard",
    description: "Hands-on experience with various crafts and DIY projects. All materials provided.",
    category: "Fair",
  },
]

export default function EventsSection() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "Workshop", "Meetup", "Session", "Event", "Fair"]

  const filteredEvents = filter === "All" ? upcomingEvents : upcomingEvents.filter((event) => event.category === filter)

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our vibrant community for engaging activities, workshops, and celebrations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-foreground hover:bg-muted-foreground/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <div key={event.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No events found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
