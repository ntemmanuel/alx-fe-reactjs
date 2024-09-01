
import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulated authentication hook
const useAuth = () => {
  // Check if the user is authenticated; this is a simulation
  // You can replace this with real authentication logic
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return { isAuthenticated };
};

function ProtectedRoute({ component: Component }) {
  const { isAuthenticated } = useAuth(); // Use the custom hook to check authentication status

  // If authenticated, render the component; otherwise, redirect to the home page
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
}

export default ProtectedRoute;
