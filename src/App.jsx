import React from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { SignIn, SignUp, useAuth } from '@clerk/clerk-react';
import ProtectedComponent from './ProtectedComponent';
import PublicComponent from './PublicComponent';
import './App.css';

const App = () => {
  const { userId } = useAuth();
  const isAuthenticated = !!userId;

  return (
    <div className="App">
      <h1>Welcome to React Authentication App</h1>
      <Routes>

        <Route
          path="/"
          element={
            <div>
              <h2>Home</h2>
              <button>
                <Link to="/public">Public</Link>
              </button>
              <button>
                <Link to={isAuthenticated ? '/protected' : '/login'}>Protected</Link>
              </button>
            </div>
          }
        />

        <Route path="/public" element={<PublicComponent />} />

        <Route
          path="/protected"
          element={
            isAuthenticated ? <ProtectedComponent /> : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/protected" replace />
            ) : (
              <div className="centered-container">
                <SignIn redirectUrl="/protected" />
              </div>
            )
          }
        />

        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              <Navigate to="/protected" replace />
            ) : (
              <div className="centered-container">
                <SignUp redirectUrl="/protected" />
              </div>
            )
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
