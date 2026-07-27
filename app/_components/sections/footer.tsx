export default function FooterSection() {
  return (
    <footer className="border-t border-dark-border/30 py-8">
      <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-4 text-dark-text-secondary text-sm">
        <p>© {new Date().getFullYear()} Nafis Handoko. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <span>Made with</span>
          <span className="text-accent-rose">❤️</span>
          <span>and lots of ☕</span>
        </div>
      </div>
    </footer>
  );
}
