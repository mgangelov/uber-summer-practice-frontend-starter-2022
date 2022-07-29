import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import { Link } from 'react-router-dom';

const onFormSubmit = () => console.log("Success");
const textstyle ={ textDecorationLine: 'underline', marginLeft:462}

const INITIAL_VALUES = {
  name: '',
  phone: '+359',
  email: '',
  affinity: 'light',
};

const footerStyle = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  padding: '20px',
  width: '100%',
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
};


const formStyle = {
  textAlign: 'center',};

export default function LoginPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  return (
    <>
      <h1 className="display-1">Please log in to continue</h1>
      <p className="lead">
        Just enter your email to log in
      </p>
      <p style = {formStyle}>
        Enter your information here:
      </p>
      <LoginForm values={values} setValues={setValues} onSubmit={onFormSubmit} />
      <Link to="/register"><p style={textstyle}>Don't have registration yet? Click here to make one.</p></Link>
      <footer style={footerStyle}>
        <blockquote className="blockquote text-center">
          <p><small>There is no can't.</small></p>
          <div className="blockquote-footer">
            Courier Management
          </div>
        </blockquote>
      </footer>
    </>
  );
}