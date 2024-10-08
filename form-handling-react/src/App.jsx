// src/App.jsx
import React from 'react';
// Import the controlled form
import RegistrationForm from './components/RegistrationForm';
// Import the Formik form
import FormikForm from './components/FormikForm';
import './index.css';


function App() {
  return (
    <div>
      <h1>User Registration</h1>
      

      {/* Controlled Form */}
      <h2>Controlled Form</h2>
      <RegistrationForm />

      <hr />

      {/* Formik Form */}
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;
