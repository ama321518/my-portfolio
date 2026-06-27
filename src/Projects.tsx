const projects = [
  {
    title: "PPFA Health Chatbot QA",
    description: "Leveraged machine learning to improve accuracy and reliability of a sexual and reproductive health chatbot used by diverse user groups.",
    tech: ["Pandas", "Numpy", "Scikit-learn"],
    link: "#"
  },
  {
    title: "TrueLens - AI Hackathon",
    description: "Built an AI search agent to match text prompts with human-created art, offering a retrieval-first alternative to generative image models.",
    tech: ["FastAPI", "Clarifai", "Hugging Face", "GPT"],
    link: "#"
  },
  {
    title: "Airbnb Booking Prediction",
    description: "Built a logistic regression model to predict whether Airbnb listings were instant-bookable using 40,000+ NYC listing records, achieving 94% accuracy.",
    tech: ["TensorFlow", "Logistic Regression", "Matplotlib"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <div style={{ padding: '60px 10%', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ 
        fontFamily: 'Arial', 
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
            <h3 style={{ fontFamily: 'Arial', color: '#333', margin: '0 0 12px 0' }}>
              {project.title}
            </h3>
            <p style={{ fontFamily: 'Arial', color: '#666', margin: '0 0 16px 0', lineHeight: '1.6' }}>
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
                  fontFamily: 'Arial'
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