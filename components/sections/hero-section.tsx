export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-4000" />
      </div>

      <div className="max-w-4xl mx-auto text-center animate-slide-up">
        {/* Club Logo Placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-primary-foreground">🎨</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Hobby Club
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          A vibrant community of creative minds, passionate makers, and collaborative thinkers dedicated to exploring
          hobbies and bringing ideas to life together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
            Join Us Today
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors duration-300">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-16 pt-8 border-t border-border/40">
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-bold text-accent">12</div>
            <div className="text-sm text-muted-foreground">Monthly Events</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl font-bold text-secondary">100%</div>
            <div className="text-sm text-muted-foreground">Fun Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
