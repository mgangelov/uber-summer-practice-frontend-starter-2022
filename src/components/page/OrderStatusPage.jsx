/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import LoadingContainer from '../common/LoadingContainer';
import OrdersTable from '../OrdersTable';
import OrderStatusTable from '../OrderStatusTable';
import {Link} from 'react-router-dom';

const ORDERAPI_URL = 'http://127.0.0.1:5000/';

const footerStyle = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  padding: '20px',
  width: '100%',
  textAlign: 'center',
};

export default function OrderStatusPage() {
  const [ordersData, setOrdersData] = useState([]);
  const [dataLoading, setDataLoading] = useState([false]);
  const [dataRequestStatus, setDataRequestStatus] = useState(200);

  const fetchData = async () => {
    setDataLoading(true);
    const ordersDataReceived = await fetch(`${ORDERAPI_URL}/order`);
    const ordersDataStatus = ordersDataReceived.status;
    const ordersDataJSON = await ordersDataReceived.json();
    setOrdersData(ordersDataJSON.Orders);
    setDataRequestStatus(ordersDataStatus);
    setDataLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (dataRequestStatus !== 200) {
    return (<p>Something went wrong with your request.</p>);
  }
  return (
    <>
      <h1 style={{
        fontFamily: 'futura',
      }}>Status</h1>
      <Container style={{
        paddingTop: '30px',
        paddingBottom: '10px',
      }}
    >
        {dataLoading
          ? (<LoadingContainer />) : (<OrderStatusTable ordersData={ordersData} />)}
      </Container>
      <footer style={footerStyle}>
      <Button
        variant="primary"
        type="submit"
      >
        Chancel
      </Button>
      </footer>
    </>
  );
}