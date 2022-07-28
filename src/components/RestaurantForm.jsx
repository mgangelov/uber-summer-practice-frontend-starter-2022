import React from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

export default function RestaurantForm({ values, setValues, onSubmit }) {
  const handleNameChange = (event) => setValues({
    ...values,
    name: event.target.value,
  });

  const handleAddressChange = (event) => setValues({
    ...values,
    address: event.target.value,
  });

  const handleDeliveryPriceChange = (event) => setValues({
    ...values,
    deliveryPrice: event.target.value,
  });

  const handleOpeningHoursChange = (event) => setValues({
    ...values,
    openingHours: event.target.value,
  });

  const handleClosingHoursChange = (event) => setValues({
    ...values,
    closingHours: event.target.value,
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

      <Form.Group className="mb-3" controlId="formAddress">
        <FloatingLabel label="Address">
          <Form.Control required type="text" placeholder="Enter address" value={values.address} onChange={handleAddressChange} />
        </FloatingLabel>
        {/* <Form.Text className="text-muted">
          Make it original.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDeliveryPrice">
        <FloatingLabel label="Delivery Price">
          <Form.Control required type="number" placeholder="Enter delivery price" min="3" max="6" value={values.deliveryPrice} onChange={handleDeliveryPriceChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Minimum 3 BGN.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formOpeningHours">
        <FloatingLabel label="Opening hours">
          <Form.Control required type="text" placeholder="Enter opening hours" value={values.openingHours} onChange={handleOpeningHoursChange} />
        </FloatingLabel>
        {/* <Form.Text className="text-muted">
          Make it original.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formOpeningHours">
        <FloatingLabel label="Closing hours">
          <Form.Control required type="text" placeholder="Enter closing hours" value={values.closingHours} onChange={handleClosingHoursChange} />
        </FloatingLabel>
        {/* <Form.Text className="text-muted">
          Make it original.
        </Form.Text> */}
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
      >
        Create
      </Button>
    </Form>
  );
}
RestaurantForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  onSubmit: PropTypes.func,
};