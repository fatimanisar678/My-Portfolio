import { useState, useEffect } from "react"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? "1rem 2rem" : "1.5rem 2rem",
      background: scrolled ? "rgba(3, 3, 3, 0.8)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <a href="#home" style={{
        fontSize: "1.5rem",
        fontFamily: "'DM Serif Display', serif",
        color: "white",
        textDecoration: "none",
        letterSpacing: "1px"
      }}>Fatima Nisar</a>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["About", "Projects", "Skills", "Contact"].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            color: scrolled ? "#fff" : "rgba(255,255,255,0.7)",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: "500",
            transition: "var(--transition)",
            textTransform: "uppercase",
            letterSpacing: "1px"
          }} className="nav-link-hover">
            {item}
          </a>
        ))}
        <a href="https://github.com/fatimanisar678" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: "0.5rem 1.2rem", fontSize: "0.8rem" }}>
          GitHub
        </a>
      </div>
    </nav>
  )
}