import { NextResponse } from "next/server"

// Sample faculty data
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

export async function GET() {
  return NextResponse.json(facultyMembers, { status: 200 })
}
