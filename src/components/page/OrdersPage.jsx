import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import LoadingContainer from '../common/LoadingContainer';
import OrdersTable from '../OrdersTable';

const ORDERAPI_URL = 'http://192.168.1.11:5000/';

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
    setOrdersData(ordersDataJSON);
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
    <Container style={
                        {
                          paddingTop: '30px',
                          paddingBottom: '10px',
                        }
                    }
    >
      {dataLoading
        ? (<LoadingContainer />) : (<OrdersTable ordersData={ordersData} />)}
    </Container>
  );
}
