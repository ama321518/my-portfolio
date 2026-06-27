import { useState } from 'react';

const VSCodeEditor = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      borderRadius: '10px',
      margin: '60px auto',
      width: '80%',
      fontFamily: 'monospace',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    }}>

      {/* Top bar with dots */}
      <div style={{
        backgroundColor: '#323233',
        padding: '12px 16px',
        borderRadius: '10px 10px 0 0',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27c93f' }} />
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', backgroundColor: '#252526' }}>
        <div onClick={() => setActiveTab('about')} style={{
          padding: '8px 20px',
          cursor: 'pointer',
          fontSize: '13px',
          color: activeTab === 'about' ? 'white' : '#888',
          borderBottom: activeTab === 'about' ? '1px solid #20B2AA' : 'none',
        }}>aboutme.md</div>
        <div onClick={() => setActiveTab('skills')} style={{
          padding: '8px 20px',
          cursor: 'pointer',
          fontSize: '13px',
          color: activeTab === 'skills' ? 'white' : '#888',
          borderBottom: activeTab === 'skills' ? '1px solid #20B2AA' : 'none',
        }}>skills.ts</div>
      </div>

      {/* Editor body */}
      <div style={{ display: 'flex', padding: '20px 0', fontSize: '14px', lineHeight: '2' }}>
        
        {/* Line numbers */}
        <div style={{ color: '#555', paddingLeft: '16px', paddingRight: '24px', textAlign: 'right', userSelect: 'none' }}>
          {[1,2,3,4,5,6,7,8,9,10].map(n => (
            <p key={n} style={{ margin: 0 }}>{n}</p>
          ))}
        </div>

        {/* Code */}
        <div style={{ flex: 1 }}>
          {activeTab === 'about' && (
            <>
              <p style={{ color: '#569cd6', margin: 0 }}>class <span style={{ color: '#4ec9b0' }}>Ama</span> extends <span style={{ color: '#4ec9b0' }}>Developer</span> {'{'}</p>
              <p style={{ color: '#9cdcfe', margin: 0, paddingLeft: '20px' }}>constructor() {'{'}</p>
              <p style={{ color: '#9cdcfe', margin: 0, paddingLeft: '40px' }}>this.<span style={{ color: '#9cdcfe' }}>name</span> = <span style={{ color: '#ce9178' }}>"Ama Yeboah"</span>;</p>
              <p style={{ color: '#9cdcfe', margin: 0, paddingLeft: '40px' }}>this.<span style={{ color: '#9cdcfe' }}>school</span> = <span style={{ color: '#ce9178' }}>"Calvin University"</span>;</p>
              <p style={{ color: '#9cdcfe', margin: 0, paddingLeft: '40px' }}>this.<span style={{ color: '#9cdcfe' }}>degree</span> = <span style={{ color: '#ce9178' }}>"Computer Science"</span>;</p>
              <p style={{ color: '#9cdcfe', margin: 0, paddingLeft: '40px' }}>this.<span style={{ color: '#9cdcfe' }}>interests</span> = <span style={{ color: '#ce9178' }}>"software engineering, AI, full stack"</span>;</p>
              <p style={{ color: '#9cdcfe', margin: 0, paddingLeft: '40px' }}>this.<span style={{ color: '#9cdcfe' }}>mood</span> = <span style={{ color: '#ce9178' }}>"always building something 🩷"</span>;</p>
              <p style={{ color: '#9cdcfe', margin: 0, paddingLeft: '20px' }}>{'}'}</p>
              <p style={{ color: '#569cd6', margin: 0 }}>{'}'}</p>
            </>
          )}
          {activeTab === 'skills' && (
  <>
    <p style={{ color: '#569cd6', margin: 0 }}>const <span style={{ color: '#9cdcfe' }}>mySkills</span> = {'{'}</p>
    <p style={{ color: '#ce9178', margin: 0, paddingLeft: '20px' }}>"languages": <span style={{ color: '#d4d4d4' }}>["Python", "C++", "JavaScript", "Java", "SQL"],</span></p>
    <p style={{ color: '#ce9178', margin: 0, paddingLeft: '20px' }}>"frontend": <span style={{ color: '#d4d4d4' }}>["React.js", "HTML", "CSS"],</span></p>
    <p style={{ color: '#ce9178', margin: 0, paddingLeft: '20px' }}>"ai_ml": <span style={{ color: '#d4d4d4' }}>["TensorFlow", "Scikit-learn", "Numpy", "Pandas"],</span></p>
    <p style={{ color: '#ce9178', margin: 0, paddingLeft: '20px' }}>"backend": <span style={{ color: '#d4d4d4' }}>["FastAPI", "RAG Pipelines", "LLMs"],</span></p>
    <p style={{ color: '#ce9178', margin: 0, paddingLeft: '20px' }}>"tools": <span style={{ color: '#d4d4d4' }}>["Git", "GitHub", "Docker", "VS Code"],</span></p>
    <p style={{ color: '#569cd6', margin: 0 }}>{'}'}</p>
  </>
)}
        </div>
      </div>
    </div>
  );
}

export default VSCodeEditor;