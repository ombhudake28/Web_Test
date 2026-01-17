import { upcomingEvents } from "@/lib/constants"

export async function GET() {
  try {
    return Response.json({
      success: true,
      data: upcomingEvents,
      total: upcomingEvents.length,
    })
  } catch (error) {
    return Response.json({ success: false, error: "Failed to fetch events" }, { status: 500 })
  }
}
