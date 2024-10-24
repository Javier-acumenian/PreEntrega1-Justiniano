import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const containerStyle = {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontSize: '24px',
    color: '#333',
    padding: '20px',
    borderRadius: '10px',
    width: '100%'
  };

  return (
    <div style={containerStyle}>
      {greeting}
    </div>
  );
};

export default ItemListContainer;