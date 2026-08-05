const projects = [
  {
    title: "Calvin Eats",
    description: "Built a full stack dining hall rating app integrating Calvin University's third-party menu API with a React frontend, FastAPI backend, and PostgreSQL database. Enabled 15+ students to rate meals in real time.",
    tech: ["React", "FastAPI", "PostgreSQL", "Supabase"],
    link: "https://github.com/ama321518/calvin-eats"
  },
  {
    title: "PPFA Health Chatbot QA",
    description: "Leveraged machine learning to improve accuracy and reliability of a sexual and reproductive health chatbot used by diverse user groups.",
    tech: ["Pandas", "Numpy", "Scikit-learn"],
    link: "https://github.com/ama321518/planned-parenthood-chatbot-ml-project"
  },
  {
    title: "TrueLens - AI Hackathon",
    description: "Built an AI search agent to match text prompts with human-created art, offering a retrieval-first alternative to generative image models.",
    tech: ["FastAPI", "Clarifai", "Hugging Face", "GPT"],
    link: "https://github.com/ama321518/openai-hackathon"
  },
  {
    title: "Airbnb Booking Prediction",
    description: "Built a logistic regression model to predict whether Airbnb listings were instant-bookable using 40,000+ NYC listing records, achieving 94% accuracy.",
    tech: ["TensorFlow", "Logistic Regression", "Matplotlib"],
    link: "https://github.com/ama321518/My-Cornell-Portfolio"
  }
];

const Projects = () => {
  return (
    <div id="projects" style={{ padding: '40px 5%', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ 
        fontFamily: 'Poppins', 
        color: '#20B2AA', 
        fontSize: '32px',
        marginBottom: '40px'
      }}>
        my projects
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '28px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            borderLeft: '4px solid #20B2AA'
          }}>
            <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <h3 style={{ fontFamily: 'Poppins', color: '#333', margin: '0 0 12px 0' }}>
                {project.title} ↗
              </h3>
            </a>
            <p style={{ fontFamily: 'Poppins', color: '#666', margin: '0 0 16px 0', lineHeight: '1.6' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{
                  backgroundColor: '#e8f8f7',
                  color: '#20B2AA',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontFamily: 'Poppins'
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;