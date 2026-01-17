interface FacultyMember {
  id: number
  name: string
  designation: string
  role: string
  image: string
}

export default function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <div className="bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:border-accent/50">
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden bg-muted">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
        <p className="text-sm font-semibold text-accent mb-1">{member.designation}</p>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </div>
    </div>
  )
}
