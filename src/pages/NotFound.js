import React from 'react';

const NotFound = () => (
  <div className="not-found-container">
    <img 
      src={`${process.env.PUBLIC_URL}/assets/not-found.png`} 
      alt="404 Not Found" 
      className="not-found-logo" 
    />
    <h1>404 - Page non trouvée</h1>
    <p>La page que vous recherchez n'existe pas.</p>
  </div>
);

export default NotFound;
