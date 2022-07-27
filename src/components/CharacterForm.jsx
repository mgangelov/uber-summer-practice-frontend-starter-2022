import React from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

export default function CharacterForm({ values, setValues, onSubmit }) {
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
        <FloatingLabel label="Age">
          <Form.Control required type="number" placeholder="Enter age" min="1" max="900" value={values.age} onChange={handleAgeChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Not older than Yoda (900 years).
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <FloatingLabel label="Email">
          <Form.Control required type="email" placeholder="Enter email" value={values.email} onChange={handleEmailChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Aliens use Gmail too.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAffinity">
        <Form.Check
          onChange={() => setValues({
            ...values,
            affinity: 'light',
          })}
          inline
          checked={values.affinity === 'light'}
          name="affinityGroup"
          type="radio"
          id="light-side"
          label="Light side"
        />
        <Form.Check
          onChange={() => setValues({
            ...values,
            affinity: 'dark',
          })}
          inline
          checked={values.affinity === 'dark'}
          name="affinityGroup"
          type="radio"
          id="dark-side"
          label="Dark side"
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}

CharacterForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  onSubmit: PropTypes.func,
};
