import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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
    <Container style={{
      paddingTop: '30px',
      paddingBottom: '10px',
    }}
    >
      {dataLoading ? (
        <LoadingContainer />
      ) : (<RestaurantsTable restaurantsData={restaurantsData} />)}
    </Container>
  );
}
