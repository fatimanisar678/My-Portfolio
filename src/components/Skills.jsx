import { skills } from "../data/data"

export default function Skills() {
  return (
    <section id="skills">
      <div style={{ textAlign: "center", marginBottom: "5rem" }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Technical Expertise</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>The tools and technologies I use to bring ideas to life.</p>
      </div>

      <div className="grid-2">
        {skills.map((s, i) => (
          <div key={i} className="glass" style={{
            padding: "2.5rem",
            borderRadius: "24px",
            display: "flex",
            gap: "2rem",
            alignItems: "flex-start",
            transition: "var(--transition)"
          }}>
            <div style={{
              fontSize: "2.5rem",
              background: "rgba(124, 110, 247, 0.1)",
              width: "80px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
              flexShrink: 0
            }}>
              {s.icon}
            </div>

            <div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>{s.title}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{
                    padding: "6px 16px",
                    background: "var(--bg-sub)",
                    border: "1px solid var(--border)",
                    borderRadius: "50px",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.8)"
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
