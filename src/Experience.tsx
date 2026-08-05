const experiences = [
  {
    role: "Research Assistant",
    company: "Calvin University",
    date: "May 2026 - Aug 2026",
    bullets: [
      "Benchmarked five LLMs (GPT-4, Claude, Phi-3 Mini, Copilot, Gemini) against custom evaluation criteria",
      "Reviewed 100+ peer-reviewed papers, identifying a critical gap in LLM-based tutoring in chemistry education",
      "Designed randomized controlled experiment on AI-assisted chemistry learning, scheduled for Fall 2026"
    ]
  },
  {
    role: "AI & Automation Extern",
    company: "Outamation",
    date: "May 2025 - Aug 2025",
    bullets: [
      "Built and deployed a RAG pipeline, boosting document classification accuracy by 32%",
      "Benchmarked open-source LLMs; selected TinyLlama for fastest and most relevant outputs",
      "Improved search precision via hybrid retrieval, cutting irrelevant results by 40%"
    ]
  }
];

const Experience = () => {
  return (
    <div style={{ padding: '60px 10%', backgroundColor: 'white' }}>
      <h2 style={{
        fontFamily: 'Poppins',
        color: '#20B2AA',
        fontSize: '32px',
        marginBottom: '40px'
      }}>
        experience
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {experiences.map((exp, index) => (
          <div key={index} style={{
            borderLeft: '4px solid #20B2AA',
            paddingLeft: '24px',
          }}>
            <h3 style={{ fontFamily: 'Poppins', color: '#333', margin: '0 0 4px 0' }}>
              {exp.role}
            </h3>
            <p style={{ fontFamily: 'Poppins', color: '#20B2AA', margin: '0 0 4px 0', fontWeight: '600' }}>
              {exp.company}
            </p>
            <p style={{ fontFamily: 'Poppins', color: '#888', margin: '0 0 12px 0', fontSize: '14px' }}>
              {exp.date}
            </p>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              {exp.bullets.map((bullet, i) => (
                <li key={i} style={{ fontFamily: 'Poppins', color: '#666', marginBottom: '8px', lineHeight: '1.6' }}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;