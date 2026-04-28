export default function About() {
  return (
    <section id="about">
      <div className="grid-2" style={{ alignItems: "center" }}>
        <div className="animate-up">
          <h2 style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>About Me</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            I am a passionate Computer Science student and developer based in Lahore, Pakistan. My journey in tech is driven by a curiosity to solve complex problems using code and intelligence.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Currently, I'm working on my Final Year Project, <strong>SignEase</strong>, which aims to bridge the communication gap for the deaf and hard-of-hearing community using real-time AI-powered sign language translation.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div>
              <h4 style={{ color: "var(--accent)", marginBottom: "0.5rem" }}>Location</h4>
              <p>Lahore, Pakistan</p>
            </div>
            <div>
              <h4 style={{ color: "var(--accent)", marginBottom: "0.5rem" }}>Interests</h4>
              <p>AI, Web Dev, Mobile Apps</p>
            </div>
          </div>
        </div>

        <div className="animate-up" style={{ animationDelay: "0.2s" }}>
          <div className="glass" style={{
            padding: "2px",
            borderRadius: "32px",
            background: "linear-gradient(135deg, var(--accent) 0%, transparent 100%)"
          }}>
            <div style={{
              background: "var(--bg-sub)",
              borderRadius: "30px",
              padding: "1rem",
              textAlign: "center",
              overflow: "hidden"
            }}>
              <img 
                src="https://github.com/fatimanisar678.png" 
                alt="Fatima Nisar" 
                style={{
                  width: "100%",
                  borderRadius: "24px",
                  display: "block",
                  filter: "grayscale(20%) contrast(1.1)",
                  transition: "var(--transition)"
                }}
                className="about-img"
              />
              <div style={{ padding: "1.5rem 0 0.5rem" }}>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "0.2rem" }}>Fatima Nisar</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>CS Student & Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
