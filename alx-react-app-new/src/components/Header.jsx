function Header() {
    return (
        <header style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: '20px', 
            backgroundColor: '#f0f4f8'
          }}>
            <h1 style={{
              width: '350px', 
              margin: '10px', 
              padding: '15px', 
              borderRadius: '10px', 
              backgroundColor: '#1a237e', 
              color: 'white', 
              textAlign: 'center', 
              fontFamily: 'Arial, sans-serif', 
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', 
              transform: 'scale(1)', 
              cursor: 'pointer', 
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              My Favorite Cities
            </h1>
          </header>
          
    );
}

export default Header;