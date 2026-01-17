import { NextResponse } from "next/server"

// Sample team data
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

export async function GET() {
  return NextResponse.json(teamMembers, { status: 200 })
}
