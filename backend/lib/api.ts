export async function fetchTeamMembers() {
  try {
    const response = await fetch("/api/team")
    const data = await response.json()
    return data.data || []
  } catch (error) {
    console.error("Error fetching team members:", error)
    return []
  }
}

export async function fetchFacultyMembers() {
  try {
    const response = await fetch("/api/faculty")
    const data = await response.json()
    return data.data || []
  } catch (error) {
    console.error("Error fetching faculty members:", error)
    return []
  }
}

export async function fetchEvents() {
  try {
    const response = await fetch("/api/events")
    const data = await response.json()
    return data.data || []
  } catch (error) {
    console.error("Error fetching events:", error)
    return []
  }
}
