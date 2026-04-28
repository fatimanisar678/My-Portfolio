import { projects } from "../data/data"

export default function Projects() {
  return (
    <section id="projects">
      <div style={{ textAlign: "center", marginBottom: "5rem" }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Featured Projects</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>A collection of my recent work in AI, Web, and Mobile development.</p>
      </div>

      <div className="grid-3">
        {projects.map((p, i) => (
          <div key={i} className="glass project-card animate-up" style={{
            padding: "2rem",
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            transition: "var(--transition)",
            cursor: "default",
            animationDelay: `${i * 0.1}s`
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span style={{ 
                padding: "4px 12px", 
                background: "rgba(124, 110, 247, 0.1)", 
                color: "var(--accent)", 
                borderRadius: "50px", 
                fontSize: "0.75rem",
                fontWeight: "600",
                border: "1px solid rgba(124, 110, 247, 0.2)"
              }}>
                {p.badge}
              </span>
              <a href={p.href} target="_blank" rel="noreferrer" style={{ color: "white", opacity: 0.5 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>

            <div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", minHeight: "4.5rem" }}>{p.desc}</p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {p.langs.map(lang => (
                <span key={lang} style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  #{lang}
                </span>
              ))}
            </div>
            
            <a href={p.href} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ 
              marginTop: "auto", 
              padding: "0.6rem 1rem", 
              fontSize: "0.85rem",
              textAlign: "center"
            }}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}