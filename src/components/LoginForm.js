// src/components/LoginForm.js

// Import necessary libraries and components
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Formik library for form handling and validation
import * as Yup from 'yup'; // Yup library for schema validation
import { useNavigate } from 'react-router-dom'; // useNavigate hook for navigation
import { useDispatch } from 'react-redux'; // useDispatch hook for dispatching actions
import { loginUser } from '../redux/actions/userActions'; // Action to log in a user

// LoginForm component
const LoginForm = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const navigate = useNavigate(); // Hook to navigate to different routes

  return (
    // Formik component for form state management and validation
    <Formik
      // Initial values for the form fields
      initialValues={{ username: '', password: '' }}
      
      // Validation schema using Yup
      validationSchema={Yup.object({
        username: Yup.string().required('Required'), // Username is required
        password: Yup.string().required('Required'), // Password is required
      })}
      
      // Function to handle form submission
      onSubmit={(values, { setSubmitting }) => {
        dispatch(loginUser(values)); // Dispatch loginUser action with form values
        setSubmitting(false); // Set submitting state to false
        navigate('/store'); // Navigate to store page after successful login
      }}
    >
      {/*
        The Form component from Formik to create the form
        Field components are used to create input fields
        ErrorMessage components are used to display validation errors
      */}
      <Form>
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" type="text" /> {/* Input field for username */}
          <ErrorMessage name="username" component="div" /> {/* Display error message for username */}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" /> {/* Input field for password */}
          <ErrorMessage name="password" component="div" /> {/* Display error message for password */}
        </div>
        <button type="submit">Login</button> {/* Submit button */}
      </Form>
    </Formik>
  );
};

export default LoginForm; // Export the LoginForm component as the default export
