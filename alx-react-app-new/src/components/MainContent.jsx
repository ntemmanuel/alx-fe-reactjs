function MainContent() {
    return (
        <main style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: '20px', 
            backgroundColor: '#f7f9fc'
          }}>
            <p style={{
              maxWidth: '500px', 
              border: '1px solid #ccc', 
              borderRadius: '10px', 
              padding: '20px', 
              margin: '10px', 
              fontFamily: 'Arial, sans-serif', 
              textAlign: 'center', 
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', 
              backgroundColor: '#ffffff', 
              color: '#333',
              lineHeight: '1.6'
            }}>
              I love to visit New York, Paris, and Tokyo.
            </p>
          </main>
          
    );
}

export default MainContent;