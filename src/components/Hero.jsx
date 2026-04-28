export default function Hero() {
  return (
    <section id="home" className="animate-up" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "5rem", marginBottom: "1rem" }} className="gradient-text">
          Fatima Nisar
        </h1>
        <h2 style={{ fontSize: "2rem", color: "var(--text-muted)", fontFamily: "'Outfit', sans-serif", fontWeight: "300" }}>
          Full Stack & AI Developer
        </h2>
      </div>
      
      <p style={{ maxWidth: "600px", fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem" }}>
        I specialize in building intelligent applications, machine learning models, and scalable full-stack systems. Currently focusing on Sign Language recognition and AI-driven solutions.
      </p>

      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
        <a href="#projects" className="btn btn-primary">View My Work</a>
        <a href="/resume.pdf" download className="btn btn-outline" style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download CV
        </a>
        <a href="#contact" className="btn btn-outline">Get In Touch</a>
      </div>
      
      <div style={{
        marginTop: "5rem",
        display: "flex",
        gap: "3rem",
        opacity: 0.5,
        fontSize: "0.9rem",
        textTransform: "uppercase",
        letterSpacing: "2px"
      }}>
        <span>AI / ML</span>
        <span>React Native</span>
        <span>Full Stack</span>
      </div>
    </section>
  )
}