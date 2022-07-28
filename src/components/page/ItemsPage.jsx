/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadingContainer from '../common/LoadingContainer';
import ItemsTable from '../ItemsTable';

const itemsAPI_URL = 'http://127.0.0.1:5000';

export default function ItemsPage() {
  const [itemsData, setItemsData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [dataRequestStatus, setDataRequestStatus] = useState(200);

  const fetchData = async () => {
    setDataLoading(true);
    const swItemsData = await fetch(`${itemsAPI_URL}/restaurants/7/items`);
    const swItemsDataStatus = swItemsData.status;
    const swItemsDataJSON = await swItemsData.json();
    console.log(swItemsDataJSON);
    setItemsData(swItemsDataJSON);
    setDataRequestStatus(swItemsDataStatus);
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
      <h1>Menu</h1>
      <Link to="/item">
        <Button
          variant="primary"
          type="submit"
          style={{
            backgroundColor: 'blue',
            border: '8px, black',
            width: '10%',
            left: '90%',
            position: 'relative',
          }}
        >
          Create a new item
        </Button>
      </Link>
      <Container style={{
        paddingTop: '30px',
        paddingBottom: '10px',
      }}
      >
        {dataLoading ? (
          <LoadingContainer />
        ) : (<ItemsTable itemsData={itemsData} />)}
      </Container>

    </>
  );
}
