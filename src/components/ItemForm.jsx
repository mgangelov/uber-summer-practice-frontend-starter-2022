import React from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

export default function ItemForm({ values, setValues, onSubmit }) {
  const handleNameChange = (event) => setValues({
    ...values,
    name: event.target.value,
  });

  const handleCategoryChange = (event) => setValues({
    ...values,
    category: event.target.value,
  });

  const handlePriceChange = (event) => setValues({
    ...values,
    price: event.target.value,
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
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCategory">
        <FloatingLabel label="Category">
          <Form.Control required type="text" placeholder="Enter category" value={values.category} onChange={handleCategoryChange} />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPrice">
        <FloatingLabel label="Price">
          <Form.Control required type="number" placeholder="Enter price" min="3" max="6" value={values.price} onChange={handlePriceChange} />
        </FloatingLabel>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
      >
        Save item
      </Button>
    </Form>
  );
}

ItemForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  onSubmit: PropTypes.func,
};
