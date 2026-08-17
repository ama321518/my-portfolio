import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 20px',
      backgroundColor: 'white',
      position: 'relative',
    }}>
      <h1 style={{ 
        color: '#20B2AA', 
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'Poppins'
      }}>ama</h1>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <a href="https://github.com/ama321518" target="_blank" rel="noreferrer">
          <FaGithub size={24} color="#20B2AA" />
        </a>
        <a href="https://linkedin.com/in/yeboah-ama" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} color="#20B2AA" />
        </a>
        <a href="mailto:apyeboah004@gmail.com">
          <MdEmail size={24} color="#20B2AA" />
        </a>
      </div>
      <a href="https://drive.google.com/file/d/1hQkKpWRS0dEWaGXrPzUggvSVxoeNJZMJ/view?usp=sharing" target="_blank" rel="noreferrer">
        <button style={{
          backgroundColor: '#20B2AA',
          color: 'white',
          border: 'none',
          padding: '8px 20px',
          borderRadius: '20px',
          fontSize: '14px',
          cursor: 'pointer',
          fontFamily: 'Poppins'
        }}>
          view resume
        </button>
      </a>
    </nav>
  );
}

export default Navbar;