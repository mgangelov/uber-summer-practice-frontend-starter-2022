import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import republicLogo from '../../static/republicLogo.png';
import empireLogo from '../../static/empireLogo.png';
import RegisterForm from '../RegisterForm';
import RegisterModal from '../RegisterModal';

const INITIAL_VALUES = {
  name: '',
  phone_number: '',
  email: '',
  start_hour: '',
  end_hour: '',
};

export default function RegisterPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [showRegisterModal, toggleRegisterModal] = useState(false);

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data, // body data type must match "Content-Type" header
    });

    return response; // parses JSON response into native JavaScript objects
  }

  const onFormSubmit = async () => {
    const formData = new FormData();
    const res = await postData('http://127.0.0.1:5000/register', JSON.stringify(values));
    if (res.status === 403) {
      const resjson = await res.json();
      console.log(resjson);
      alert(resjson.errors);
    }
    if (res.status === 200) {
      formData.append('name', values.name);
      formData.append('phone_number', values.phone);
      formData.append('email', values.email);
      formData.append('start_hour', values.start);
      formData.append('end_hour', values.end);
      toggleRegisterModal(true);
    }
    postData('http://127.0.0.1:5000/register', JSON.stringify(values));
  };

  const onModalClose = () => {
    toggleRegisterModal(false);
    setValues(INITIAL_VALUES);
  };
  return (
    <>
      <Container style={{
        paddingTop: '30px',
        paddingBottom: '10px',
      }}
      >
        <h1>Welocme to Uber Delivery</h1>
        <p>Hello, please submit your application for a new courier.</p>
        <RegisterForm values={values} setValues={setValues} onSubmit={onFormSubmit} />
      </Container>
      <RegisterModal registerData={values} visible={showRegisterModal} onClose={onModalClose} />
    </>
  );
}
