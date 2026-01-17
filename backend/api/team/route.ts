import { teamMembers } from "@/lib/constants"

export async function GET() {
  try {
    return Response.json({
      success: true,
      data: teamMembers,
      total: teamMembers.length,
    })
  } catch (error) {
    return Response.json({ success: false, error: "Failed to fetch team members" }, { status: 500 })
  }
}
