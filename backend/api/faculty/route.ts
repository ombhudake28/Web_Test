import { facultyMembers } from "@/lib/constants"

export async function GET() {
  try {
    return Response.json({
      success: true,
      data: facultyMembers,
      total: facultyMembers.length,
    })
  } catch (error) {
    return Response.json({ success: false, error: "Failed to fetch faculty members" }, { status: 500 })
  }
}
