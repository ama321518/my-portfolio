import Navbar from './Navbar';
import VSCodeEditor from './VSCodeEditor';
import Projects from './Projects';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ 
        backgroundColor: '#20B2AA', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        gap: '20px'
      }}>
        <TypeAnimation
          sequence={[
            "hi, i'm ama pokua🩷", 2000,
            "i'm a cs student", 2000,
            "i'm open to swe roles", 2000,
            "i'm learning to build as i go 🩷", 2000,
          ]}
          speed={50}
          repeat={Infinity}
          style={{ color: 'white', fontSize: '48px', fontWeight: 'bold' }}
/>
        <p style={{ color: 'white', fontFamily: 'Arial', fontSize: '20px', margin: 0 }}>
          CS student @ Calvin University • aspiring software engineer
        </p>
        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
          backgroundColor: 'white',
          color: '#20B2AA',
          border: 'none',
          padding: '12px 30px',
          borderRadius: '25px',
          fontSize: '16px',
          cursor: 'pointer',
          fontFamily: 'Arial'
        }}>
          view my work
        </button>
      </div>
      <div style={{ backgroundColor: '#fff9f0', paddingBottom: '60px' }}>
        <VSCodeEditor />
      </div>
      <Projects />
          <Footer />

    </div>
  );
}

export default App;