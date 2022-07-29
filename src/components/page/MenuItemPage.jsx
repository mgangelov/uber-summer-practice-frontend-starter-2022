import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
// import JsonDisplay from '../MenuItemTable';
import { useParams } from 'react-router-dom';
import LoadingContainer from '../common/LoadingContainer';
import MenuItemTable from '../MenuItemTable';

const ORDERAPI_URL = 'http://192.168.1.11:5000/';

function Invoice() {
  const params = useParams();
  return params.restaurantID;
}

export default function MenuPage() {
  const [menuData, setMenuData] = useState([]);
  const [dataLoading, setDataLoading] = useState([false]);
  const [dataRequestStatus, setDataRequestStatus] = useState(200);

  const fetchData = async () => {
    setDataLoading(true);
    const restaurantID = Invoice();
    const ordersDataReceived = await fetch(`${ORDERAPI_URL}/restaurants/${restaurantID}/items`);
    const ordersDataStatus = ordersDataReceived.status;
    const ordersDataJSON = await ordersDataReceived.json();
    // console.log(ordersDataJSON);
    setMenuData(ordersDataJSON);
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
        ? (<LoadingContainer />) : (<MenuItemTable menuData={menuData} />)}
    </Container>
  );
}
