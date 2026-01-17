"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Info } from "lucide-react"

interface Event {
  id: number
  name: string
  date: string
  time: string
  venue: string
  description: string
  category: string
}

export default function EventCard({ event }: { event: Event }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Workshop: "bg-primary/20 text-primary",
      Meetup: "bg-accent/20 text-accent",
      Session: "bg-secondary/20 text-secondary",
      Event: "bg-primary/20 text-primary",
      Fair: "bg-accent/20 text-accent",
    }
    return colors[category] || "bg-muted text-foreground"
  }

  return (
    <div className="bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:border-primary/50 flex flex-col h-full">
      {/* Category Badge */}
      <div className="px-6 pt-4 flex items-start justify-between">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${getCategoryColor(event.category)}`}>
          {event.category}
        </span>
      </div>

      {/* Content */}
      <div className="px-6 py-4 flex-1">
        <h3 className="text-xl font-bold text-foreground mb-4 line-clamp-2">{event.name}</h3>

        {/* Event Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-accent" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="line-clamp-2">{event.venue}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
      </div>

      {/* Actions */}
      <div className="px-6 pb-4 border-t border-border/40 pt-4 flex flex-col gap-2">
        <button className="w-full px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
          Register
        </button>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-4 py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Info className="w-4 h-4" />
          Learn More
        </button>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="px-6 pb-4 bg-muted/20 border-t border-border/40 animate-slide-up">
          <p className="text-sm text-muted-foreground leading-relaxed">
            This event is part of our ongoing commitment to providing diverse and engaging experiences for our community
            members. Join us to connect with fellow enthusiasts and expand your skills!
          </p>
        </div>
      )}
    </div>
  )
}
