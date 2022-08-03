import React, { useEffect, useState, useCallback } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import emoji from 'emoji-dictionary';
import deliveryLogo from '../../static/deliveryLogo.gif';
import TakenOrderInfoList from '../TakenOrderInfoList';

const CancelButtonStyle = {
  marginRight: 100,
  marginLeft: -333,
  borderRadius: 7,

};

const FinishedButtonStyle = {
  marginRight: -365,
  marginLeft: 100,
  borderRadius: 7,
};

const TextStyle = {
  textAlign: 'center',
  fontSize: 50,
  position: 'relative',
  top: 10,
};

const DeliveryLogoStyle = {
  display: 'flex',
  position: 'relative',
  top: 40,
  width: 200,
  height: 150,
  marginLeft: 'auto',
  marginRight: 'auto',
};

// emoji=require('emoji-dictionary')

export default function OrderPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={TextStyle}>Taken delivery information: </h1>
      <Container>
        <img style={DeliveryLogoStyle} src={deliveryLogo} alt="" />
      </Container>
      <Container style={{
        paddingTop: '100px',
      }}
      >
        <TakenOrderInfoList />
      </Container>
      <Container style={{
        display: 'flex',
        width: '50px',
        height: '40px',
        justifyContent: 'space-between',
        position: 'relative',
        top: '200px',
      }}
      >
        <ButtonGroup>
          <Button
            id="cancel"
            variant="danger"
            type="submit"
            style={CancelButtonStyle}
            onClick={() => navigate('/orders')}
          >
            Cancel
          </Button>
          <Button
            id="finish"
            variant="success"
            type="submit"
            style={FinishedButtonStyle}
            onClick={() => navigate('/orders')}
          >
            Finished
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
}
