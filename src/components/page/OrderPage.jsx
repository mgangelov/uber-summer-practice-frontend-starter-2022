import React, { useEffect, useState, useCallback } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import LoadingContainer from '../common/LoadingContainer';

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

  const URL = 'http://127.0.0.1:5000';

  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie] = useCookies(['x-access-tokens']);

  const { id } = useParams();

  const fetchData = useCallback(async () => {
    const takenOrderData = await fetch(`${URL}/delivery/${id}`);
    const takenOrderDataJSON = await takenOrderData.json();
    setOrderData(takenOrderDataJSON);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (<LoadingContainer />);
  }

  async function putData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json',
        'x-access-tokens': cookies['x-access-tokens'],
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: data,

    });
  }

  const cancelStatus = async () => {
    putData(`${URL}/delivery/order`, JSON.stringify({
      status: 'Open',
      delivery_id: id,
    }));
    navigate('/orders')
  };

  const finishStatus = async () => {
    putData(`${URL}/delivery/order`, JSON.stringify({
      status: 'Finished',
      delivery_id: id,
    }));
    navigate('/orders')
  };
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
        <TakenOrderInfoList orderData={orderData} />
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
            onClick={() => {cancelStatus()}}
          >
            Cancel
          </Button>
          <Button
            id="finish"
            variant="success"
            type="submit"
            style={FinishedButtonStyle}
            onClick={() => {finishStatus()}}
          >
            Finished
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
}
