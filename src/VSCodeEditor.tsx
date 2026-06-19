const VSCodeEditor = () => {
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
        <span style={{ color: '#888', marginLeft: '16px', fontSize: '13px' }}>~/portfolio/aboutme.md</span>
      </div>

      {/* Editor body */}
      <div style={{ padding: '30px', color: '#d4d4d4', fontSize: '14px', minHeight: '300px' }}>
        <p style={{ color: '#569cd6' }}>// welcome to my portfolio</p>
        <p style={{ color: '#888' }}>more coming soon...</p>
      </div>

    </div>
  );
}

export default VSCodeEditor;