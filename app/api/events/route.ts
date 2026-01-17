import { NextResponse } from "next/server"

// Sample events data
const events = [
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  if (category && category !== "All") {
    const filtered = events.filter((event) => event.category === category)
    return NextResponse.json(filtered, { status: 200 })
  }

  return NextResponse.json(events, { status: 200 })
}
