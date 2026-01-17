// API utility functions for fetching data

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  description: string
}

interface FacultyMember {
  id: number
  name: string
  designation: string
  role: string
  image: string
}

interface Event {
  id: number
  name: string
  date: string
  time: string
  venue: string
  description: string
  category: string
}

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await fetch("/api/team", { cache: "no-store" })
    if (!response.ok) throw new Error("Failed to fetch team members")
    return response.json()
  } catch (error) {
    console.error("Error fetching team members:", error)
    return []
  }
}

export async function fetchFacultyMembers(): Promise<FacultyMember[]> {
  try {
    const response = await fetch("/api/faculty", { cache: "no-store" })
    if (!response.ok) throw new Error("Failed to fetch faculty members")
    return response.json()
  } catch (error) {
    console.error("Error fetching faculty members:", error)
    return []
  }
}

export async function fetchEvents(category?: string): Promise<Event[]> {
  try {
    const url = category && category !== "All" ? `/api/events?category=${category}` : "/api/events"
    const response = await fetch(url, { cache: "no-store" })
    if (!response.ok) throw new Error("Failed to fetch events")
    return response.json()
  } catch (error) {
    console.error("Error fetching events:", error)
    return []
  }
}
