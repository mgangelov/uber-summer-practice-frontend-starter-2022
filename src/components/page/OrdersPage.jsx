import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import LoadingContainer from '../common/LoadingContainer';
import OrdersTable from '../OrdersTable';

const ORDERAPI_URL = 'http://172.18.167.189:5000';

export default function OrdersPage() {
  const [ordersData, setOrdersData] = useState([]);
  const [dataLoading, setDataLoading] = useState([false]);
  const [dataRequestStatus, setDataRequestStatus] = useState(200);

  const fetchData = async () => {
    setDataLoading(true);
    const ordersDataReceived = await fetch(`${ORDERAPI_URL}/order`);
    const ordersDataStatus = ordersDataReceived.status;
    const ordersDataJSON = await ordersDataReceived.json();
    console.log(ordersDataJSON.Orders);
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
        textAlign:'center',
        fontFamily:'futura',
      }}>All Orders</h1>
      <Container style={{
        paddingTop: '30px',
        paddingBottom: '10px',
      }}
      >
        {dataLoading
          ? (<LoadingContainer />) : (<OrdersTable ordersData={ordersData} />)}
      </Container>

    </>
  );
}
