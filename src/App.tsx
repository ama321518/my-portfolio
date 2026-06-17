import Navbar from './Navbar';

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
        <h1 style={{ color: 'white', fontFamily: 'Arial', fontSize: '48px', margin: 0 }}>
          hi, i'm ama 🩷
        </h1>
        <p style={{ color: 'white', fontFamily: 'Arial', fontSize: '20px', margin: 0 }}>
          cs student @ calvin university • aspiring software engineer
        </p>
        <button style={{
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
    </div>
  );
}

export default App;