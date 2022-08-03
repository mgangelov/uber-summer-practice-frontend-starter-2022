import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import LoginForm from '../LoginForm';

// const onFormSubmit = () => console.log("Success");
const textstyle = { textDecorationLine: 'underline', marginLeft: 462 };
const INITIAL_VALUES = {
  email: '',
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

const formStyle = { textAlign: 'center' };
export default function LoginPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [cookies, setCookie] = useCookies(['x-access-tokens']);
  const navigate = useNavigate();

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: data,
    });

    return response;
  }

  const onFormSubmit = async () => {
    const res = await postData('http://127.0.0.1:5000/login', JSON.stringify(values));

    console.log(res);
    if (res.status === 200) {
      console.log(res.body);
      const resjson = await res.json();
      console.log(resjson);
      const { token } = resjson;
      console.log('SETTING TOKEN ', token);
      setCookie('x-access-tokens', token);
      navigate('/orders');
    }
    return res;
  };
  return (
    <>
      <h1 className="display-1">Please log in to continue</h1>
      <p className="lead">
        Just enter your email to log in
      </p>
      <p style={formStyle}>
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
