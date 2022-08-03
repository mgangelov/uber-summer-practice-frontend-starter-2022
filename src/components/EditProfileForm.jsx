import React from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

async function deleteAccount(token) {
  await fetch('http://127.0.0.1:5000/courier', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-access-tokens': token,
    },
  });
}

export default function EditProfileForm({ values, setValues, onSubmit }) {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['x-access-tokens']);

  const handleNameChange = (event) => setValues({
    ...values,
    name: event.target.value,
  });

  const handlePhoneNumberChange = (event) => setValues({
    ...values,
    phoneNumber: event.target.value,
  });

  const handleEmailChange = (event) => setValues({
    ...values,
    email: event.target.value,
  });

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}
    >
      <Form.Group className="mb-3" controlId="formName">
        <FloatingLabel label="Name">
          <Form.Control required type="text" placeholder="Enter name" value={values.name} onChange={handleNameChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Feel confident with your name!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <FloatingLabel label="Phone number">
          <Form.Control placeholder="Enter phone number" value={values.phoneNumber} onChange={handlePhoneNumberChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Not more than 20 characters.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <FloatingLabel label="Email">
          <Form.Control required type="email" placeholder="Enter email" value={values.email} onChange={handleEmailChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Make it original.
        </Form.Text>
      </Form.Group>

      <Button
        variant="primary"
        // type="submit"
        onClick={async () => {
          await deleteAccount(cookies['x-access-tokens']);
          navigate('/login');
        }}
        style={{
          backgroundColor: 'red',
          border: 'white',
        }}
      >
        Delete account
      </Button>
      <Button
        variant="outline-primary"
        type="submit"
        style={{
          left: '28.6cm',
          position: 'relative',
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

EditProfileForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  onSubmit: PropTypes.func,
};
