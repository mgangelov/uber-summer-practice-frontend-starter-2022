import React from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const buttonStyle = { height: 60, marginTop: 10, width: 400, marginLeft: 450, justifyContent: 'center', alignItems: 'center' };

export default function LoginForm({ values, setValues, onSubmit }) {
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
      <Form.Group className="mb-3" controlId="formEmail">
        <FloatingLabel label="Email">
          <Form.Control required type="email" placeholder="Enter email" value={values.email} onChange={handleEmailChange} />
        </FloatingLabel>
      </Form.Group>

      <Button
        style={buttonStyle}
        type="submit"
      >
        Log In
      </Button>
    </Form>
  );
}

LoginForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  onSubmit: PropTypes.func,
};
