interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  description: string
}

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:border-primary/50">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-muted">
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
        <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
      </div>
    </div>
  )
}
