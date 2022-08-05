import React from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

export default function CharacterForm({ values, setValues, onSubmit }) {
  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}
    >
      <Form.Group className="mb-3" controlId="formAffinity">
        <Form.Check
          onChange={() => setValues({
            ...values,
            affinity: order
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
