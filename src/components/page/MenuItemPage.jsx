import React, { useEffect, useState, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import LoadingContainer from '../common/LoadingContainer';
import MenuItemTable from '../MenuItemTable';

const menuURL = 'http://172.18.167.189:5000';

export default function MenuPage() {
  const { restaurantID } = useParams();
  const [menuData, setMenuData] = useState([]);
  const [dataLoading, setDataLoading] = useState([false]);
  const [dataRequestStatus, setDataRequestStatus] = useState(200);

  const fetchData = useCallback(async () => {
    setDataLoading(true);
    console.log('RESTAURANT ID ', restaurantID);
    // const itemsDataReceived = await fetch(`${menuURL}/restaurant/${restaurantID}/item`);
    const itemsDataReceived = await fetch(`${menuURL}/restaurant/1/item`);
    const itemsDataStatus = itemsDataReceived.status;
    const itemsDataJSON = await itemsDataReceived.json();
    console.log(itemsDataJSON);
    setMenuData(itemsDataJSON);
    setDataRequestStatus(itemsDataStatus);
    setDataLoading(false);
  }, [restaurantID]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (dataRequestStatus !== 200) {
    return (<p>Something went wrong with your request.</p>);
  }
  return (
    <Container style={{
      paddingTop: '30px',
      paddingBottom: '10px',
    }}
    >
      {dataLoading
        ? (<LoadingContainer />) : (<MenuItemTable menuData={menuData} />)}
    </Container>
  );
}
