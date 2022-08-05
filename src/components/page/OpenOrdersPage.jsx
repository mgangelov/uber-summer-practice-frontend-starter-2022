import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Container } from 'react-bootstrap';
import LoadingContainer from '../common/LoadingContainer';
import OpenOrdersTable from '../OpenOrdersTable';
const restApi_URL = 'http://127.0.0.1:5000';

const initialOrderData={
  openOrdersData: [],
  currentCourierAddress: "",
  selectedOrder: null,
};

export default function OpenOrdersPage() {
  const [ordersData, setOrderData] = useState(initialOrderData);
  const [dataLoading, setDataLoading] = useState(false);
  const [dataRequestStatus, setDataRequestStatus] = useState(200);
  const [cookies, setCookie] = useCookies(['x-access-tokens']);

  const fetchData = async () => {
    setDataLoading(true);
    const openOrdersData = await fetch(`${restApi_URL}/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-tokens': cookies['x-access-tokens'],
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
    const openOrdersDataStatus = openOrdersData.status;
    const openOrdersDataJSON = await openOrdersData.json();
    console.log(openOrdersDataJSON);
    setOrderData({...ordersData, openOrdersData: openOrdersDataJSON});
    setDataRequestStatus(openOrdersDataStatus);
    setDataLoading(false);
  };
  
  const TextStyle = {
    textAlign: 'center',
    fontSize: 50,
    position: 'relative',
    top: 40,
  };
  
  const InputTextStyle = {
    fontSize: 18,
    marginLeft: 450,
    position: 'relative',
    top: 100,
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (dataRequestStatus !== 200) {
    return (<p>Something went wrong with your request.</p>);
  }

  return (
    <>
    <h1 style={TextStyle}>Take order form</h1>
    <Container style={{
      paddingTop: '30px',
      paddingBottom: '10px',
    }}
    >
      {dataLoading ? (
        <LoadingContainer />
      ) : (<OpenOrdersTable ordersData={ordersData} setOrderData={setOrderData}/>)}

    </Container>
    </>
  );
}
