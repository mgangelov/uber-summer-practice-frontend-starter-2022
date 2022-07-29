import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LogOutButtonStyle = {
  width: 110,
  height: 40,
  marginLeft: 1210,
};

const ListGroupStyle = {
  position: 'relative',
  top: 120,
  width: 700,
  height: 20,
  marginLeft: 'auto',
  marginRight: 'auto',
};

const CancelButtonStyle = {
  width: 50,
  height: 40,
  justifyContent: 'space-between',
  position: 'relative',
  top: 315,
  marginRight: 100,
  marginLeft: 300,
  borderRadius: 7,
};

const FinishedButtonStyle = {
  width: 50,
  height: 40,
  justifyContent: 'space-between',
  position: 'relative',
  top: 315,
  marginRight: 308,
  marginLeft: 100,
  borderRadius: 7,

};

const TextStyle = {
  textAlign: 'center',
  fontSize: 50,
  position: 'relative',
  top: 20,
};

export default function OrderPage() {
  const navigate = useNavigate();
  return (
    <>
      <Button
        id="log_out"
        variant="info"
        type="submit"
        style={LogOutButtonStyle}
      >
        Log off
      </Button>
      <h1 style={TextStyle}>Taken delivery information</h1>
      <ListGroup style={ListGroupStyle}>
        <ListGroup.Item variant="primary">Delivery price:</ListGroup.Item>
        <ListGroup.Item variant="success">Restaurant address:</ListGroup.Item>
        <ListGroup.Item variant="danger">Client address:</ListGroup.Item>
        <ListGroup.Item variant="warning">Client name:</ListGroup.Item>
        <ListGroup.Item variant="dark">Client phone number:</ListGroup.Item>
      </ListGroup>
      <ButtonGroup>
        <Button
          id="cancel"
          variant="danger"
          type="submit"
          style={CancelButtonStyle}
          onClick={() => navigate('/planets')}
        >
          Cancel
        </Button>
        <Button
          id="finish"
          variant="success"
          type="submit"
          style={FinishedButtonStyle}
          onClick={() => navigate('/planets')}
        >
          Finished
        </Button>
      </ButtonGroup>
    </>
  );
}
