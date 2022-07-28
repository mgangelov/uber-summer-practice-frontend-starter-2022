/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadingContainer from '../common/LoadingContainer';
import RestaurantsTable from '../RestaurantsTable';

const restAPI_URL = 'http://127.0.0.1:5000';

export default function RestaurnatsPage() {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [dataRequestStatus, setDataRequestStatus] = useState(200);

  const fetchData = async () => {
    setDataLoading(true);
    const swRestaurantsData = await fetch(`${restAPI_URL}/restaurants`);
    const swRestaurantsDataStatus = swRestaurantsData.status;
    const swRestaurantsDataJSON = await swRestaurantsData.json();
    console.log(swRestaurantsDataJSON);
    setRestaurantsData(swRestaurantsDataJSON);
    setDataRequestStatus(swRestaurantsDataStatus);
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
      <h1>Open restaurants</h1>
      <Link to="/restaurant">
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
          Create a new restaurant
        </Button>
      </Link>
      <Container style={{
        paddingTop: '30px',
        paddingBottom: '10px',
      }}
      >
        {dataLoading ? (
          <LoadingContainer />
        ) : (<RestaurantsTable restaurantsData={restaurantsData} />)}
      </Container>

    </>
  );
}
