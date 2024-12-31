import React from 'react';
import './App.css';

const PublicComponent = () => {
  return (
    <div className="public-component">
      <h2>Public Component</h2>
      <p>This component is accessible without logging in.</p>
    </div>
  );
};

export default PublicComponent;
