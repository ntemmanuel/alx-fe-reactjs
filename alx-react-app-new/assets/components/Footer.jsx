function Footer() {
    return (
      <footer style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '20px',  
      }}>
        <p style={{
          maxWidth: '450px', 
          borderRadius: '10px', 
          padding: '15px 30px', 
          margin: '10px', 
          fontFamily: 'Arial, sans-serif', 
          textAlign: 'center', 
          backgroundColor: '#ffffff', 
          color: '#1a237e', 
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
          cursor: 'pointer', 
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}>
          © 2023 City Lovers
        </p>
      </footer>
      
    );
}

export default Footer;