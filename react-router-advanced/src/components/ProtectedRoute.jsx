
import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulated authentication function
const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true'; // Simple authentication check
};

function ProtectedRoute({ component: Component }) {
  return isAuthenticated() ? <Component /> : <Navigate to="/" />;
}

export default ProtectedRoute;
