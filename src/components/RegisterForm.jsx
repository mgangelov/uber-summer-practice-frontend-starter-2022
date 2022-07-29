import React from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

export default function RegisterForm({ values, setValues, onSubmit }) {
  const handleNameChange = (event) => setValues({
    ...values,
    name: event.target.value,
  });

  const handleAgeChange = (event) => setValues({
    ...values,
    age: event.target.value,
  });

  const handleEmailChange = (event) => setValues({
    ...values,
    email: event.target.value,
  });

  const handleStartHourChange = (event) => setValues({
    ...values,
    starthour: event.target.value,
  });

  const handleEndHourChange = (event) => setValues({
    ...values,
    endhour: event.target.value,
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
          Make it original.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAge">
        <FloatingLabel label="PhoneNumber">
          <Form.Control required type="text" placeholder="Enter phone number" value={values.age} onChange={handleAgeChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          It should include digits only.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <FloatingLabel label="Email">
          <Form.Control required type="email" placeholder="Enter email" value={values.email} onChange={handleEmailChange} />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" >
        <FloatingLabel label="StartWorkingHour">
          <Form.Control required type="number" min="0" max = "24" placeholder="Enter start hour" value={values.starthour} onChange={handleStartHourChange} />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" >
        <FloatingLabel label="EndWorkingHour">
          <Form.Control required type="number" min="0" max = "24" placeholder="Enter end hour" value={values.endhour} onChange={handleEndHourChange} />
        </FloatingLabel>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
      >
        Register
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  onSubmit: PropTypes.func,
};
