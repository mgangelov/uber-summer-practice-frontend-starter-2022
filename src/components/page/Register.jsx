import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import republicLogo from '../../static/republicLogo.png';
import empireLogo from '../../static/empireLogo.png';
import RegisterForm from '../RegisterForm';
import RegisterModal from '../RegisterModal';

const INITIAL_VALUES = {
  name: '',
  phone: '+359',
  email: '',
  affinity: 'light',
};

export default function RegisterPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [showRegisterModal, toggleRegisterModal] = useState(false);

  const onFormSubmit = () => toggleRegisterModal(true);

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
