const Footer = () => {
  return (
    <div style={{
      backgroundColor: '#20B2AA',
      padding: '40px',
      textAlign: 'center',
      fontFamily: 'Poppins',
    }}>
      <p style={{ color: 'white', margin: '0 0 8px 0', fontSize: '18px' }}>
        ama yeboah
      </p>
      <a href="https://readymag.website/u1331391126/6486929/" target="_blank" rel="noreferrer">
        <button style={{
          backgroundColor: 'white',
          color: '#20B2AA',
          border: 'none',
          padding: '10px 24px',
          borderRadius: '20px',
          fontSize: '14px',
          cursor: 'pointer',
          fontFamily: 'Poppins',
          marginBottom: '24px'
        }}>
          see me outside of CS ✨
        </button>
      </a>
      <p style={{ color: 'rgba(255,255,255,0.5)', margin: 0, fontSize: '12px' }}>
        © 2026 Ama Yeboah • CS Student @ Calvin University
      </p>
    </div>
  );
}

export default Footer;