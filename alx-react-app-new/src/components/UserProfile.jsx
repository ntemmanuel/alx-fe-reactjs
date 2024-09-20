import React from 'react';

const UserProfile = (props) => {
    return (
        <div style={{
            marginTop: '40px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            margin: '0'
          }}>
            <div style={{
              border: '1px solid #ccc', 
              borderRadius: '10px', 
              padding: '20px', 
              margin: '10px', 
              fontFamily: 'Arial, sans-serif', 
              textAlign: 'center', 
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', 
              transform: 'scale(1)', 
              cursor: 'pointer', 
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <h2 style={{ 
                color: 'blue', 
                fontSize: '1.8rem', 
                marginBottom: '10px'
              }}>
                {props.name}
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                color: '#333'
              }}>
                Age: <span style={{ color: '#007bff', fontWeight: 'bold' }}>{props.age}</span>
              </p>
              <p style={{ 
                fontSize: '1rem', 
                color: '#555'
              }}>
                Bio: {props.bio}
              </p>
            </div>
          </div>
          
    );
  };

  export default UserProfile;