import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: 'white',
    }}>
      <h1 style={{ color: '#20B2AA', fontFamily: 'Arial' }}>ama</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="https://github.com/ama321518" target="_blank" rel="noreferrer">
          <FaGithub size={24} color="#20B2AA" />
        </a>
        <a href="https://linkedin.com/in/yeboah-ama" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} color="#20B2AA" />
        </a>
        <a href="mailto:YOUR-EMAIL" >
          <MdEmail size={24} color="#20B2AA" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;