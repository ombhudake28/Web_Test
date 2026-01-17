export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-muted/30 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-foreground mb-4">About</h4>
            <p className="text-muted-foreground text-sm">
              Hobby Club is a creative community dedicated to bringing together passionate hobbyists and makers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#team" className="hover:text-primary transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-primary transition-colors">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-primary transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-muted-foreground text-sm">
              Email:{" "}
              <a href="mailto:info@hobbyclub.com" className="hover:text-primary transition-colors">
                info@hobbyclub.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Hobby Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
