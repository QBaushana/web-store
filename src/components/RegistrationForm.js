// src/components/RegistrationForm.js

// Import necessary libraries and components
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Formik library for form handling and validation
import * as Yup from 'yup'; // Yup library for schema validation
import { useNavigate } from 'react-router-dom'; // useNavigate hook for navigation
import { useDispatch } from 'react-redux'; // useDispatch hook for dispatching actions
import { registerUser } from '../redux/actions/userActions'; // Action to register a user

// RegistrationForm component
const RegistrationForm = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const navigate = useNavigate(); // Hook to navigate to different routes

  return (
    // Formik component for form state management and validation
    <Formik
      // Initial values for the form fields
      initialValues={{ firstName: '', surname: '', username: '', email: '', password: '' }}
      
      // Validation schema using Yup
      validationSchema={Yup.object({
        firstName: Yup.string().required('Required'), // First name is required
        surname: Yup.string().required('Required'), // Surname is required
        username: Yup.string().required('Required'), // Username is required
        email: Yup.string().email('Invalid email address').required('Required'), // Email must be valid and is required
        password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'), // Password must be at least 8 characters and is required
      })}
      
      // Function to handle form submission
      onSubmit={(values, { setSubmitting }) => {
        dispatch(registerUser(values)); // Dispatch registerUser action with form values
        setSubmitting(false); // Set submitting state to false
        navigate('/login'); // Navigate to login page after successful registration
      }}
    >
      {/*
        The Form component from Formik to create the form
        Field components are used to create input fields
        ErrorMessage components are used to display validation errors
      */}
      <Form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" /> {/* Input field for first name */}
          <ErrorMessage name="firstName" component="div" /> {/* Display error message for first name */}
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <Field name="surname" type="text" /> {/* Input field for surname */}
          <ErrorMessage name="surname" component="div" /> {/* Display error message for surname */}
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" type="text" /> {/* Input field for username */}
          <ErrorMessage name="username" component="div" /> {/* Display error message for username */}
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" /> {/* Input field for email */}
          <ErrorMessage name="email" component="div" /> {/* Display error message for email */}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" /> {/* Input field for password */}
          <ErrorMessage name="password" component="div" /> {/* Display error message for password */}
        </div>
        <button type="submit">Register</button> {/* Submit button */}
      </Form>
    </Formik>
  );
};

export default RegistrationForm; // Export the RegistrationForm component as the default export
