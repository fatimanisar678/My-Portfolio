export default function Footer() {
  return (
    <footer style={{
      padding: "4rem 2rem",
      textAlign: "center",
      borderTop: "1px solid var(--border)",
      background: "var(--bg-sub)"
    }}>
      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Fatima Nisar</h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Designing & Developing with Purpose.</p>
      </div>

      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "2rem", 
        marginBottom: "2rem",
        fontSize: "0.85rem",
        textTransform: "uppercase",
        letterSpacing: "1px"
      }}>
        <a href="#home" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</a>
        <a href="#about" style={{ color: "var(--text-muted)", textDecoration: "none" }}>About</a>
        <a href="#projects" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Projects</a>
        <a href="#contact" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Contact</a>
      </div>

      <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", opacity: 0.5 }}>
        &copy; {new Date().getFullYear()} Fatima Nisar. All rights reserved.
      </p>
    </footer>
  )
}
