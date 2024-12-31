import React from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';
import './App.css';

const ProtectedComponent = () => {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <div className="protected-component">
      <h1>Protected Component</h1>
      {user ? (
        <>
          <p>Welcome, {user.firstName} {user.lastName}!</p>
          <p>Email: {user.emailAddresses[0].emailAddress}</p>
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <p>Please log in to access this content.</p>
      )}
    </div>
  );
};

export default ProtectedComponent;
