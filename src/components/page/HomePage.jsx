import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import RestaurantsTable from '../RestaurantsTable';
import LoadingContainer from '../common/LoadingContainer';

const headerStyle = {
  // position: 'fixed',
  left: '0px',
  top: '55px',
  width: '100%',
  textAlign: 'center',
  fontFamily: 'futura',
};

const ORDERAPI_URL = 'http://127.0.0.1:5000/';

export default function HomePage() {
  const [restaurantsData, setRestaurantData] = useState([]);
  const [dataLoading, setDataLoading] = useState([false]);
  const [dataRequestStatus, setDataRequestStatus] = useState(200);

  const fetchData = async () => {
    setDataLoading(true);
    const restaurantsDataReceived = await fetch(`${ORDERAPI_URL}/restaurant`);
    const restaurantsDataStatus = restaurantsDataReceived.status;
    const restaurantsDataJSON = await restaurantsDataReceived.json();
    setRestaurantData(restaurantsDataJSON);
    setDataRequestStatus(restaurantsDataStatus);
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
      <header style={headerStyle}>
        <h1>Open Restaurants</h1>
      </header>
      <Container style={{
        paddingTop: '30px',
        paddingBottom: '10px',
      }}
      >
        {dataLoading
          ? (<LoadingContainer />) : (<RestaurantsTable restaurantsData={restaurantsData} />)}
      </Container>
    </>
  );
}
