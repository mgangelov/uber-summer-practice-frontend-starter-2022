/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { element, func } from 'prop-types';
import LoadingContainer from '../common/LoadingContainer';
import RestaurantsTable from '../RestaurantsTable';

const restAPI_URL = 'http://127.0.0.1:5000';

export default function RestaurnatsPage() {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [dataRequestStatus, setDataRequestStatus] = useState(200);

  const deleteRestaurant = (restaurantId) => {
    console.log(restaurantsData);
    const newRestaurants = restaurantsData.filter((x) => x.restaurant_id !== restaurantId);
    setRestaurantsData(newRestaurants);
  };

  const fetchData = async () => {
    setDataLoading(true);
    const fetchURL = `${restAPI_URL}/restaurants?open=${isChecked}`;
    const swRestaurantsData = await fetch(fetchURL);
    const swRestaurantsDataStatus = swRestaurantsData.status;
    const swRestaurantsDataJSON = await swRestaurantsData.json();
    console.log(swRestaurantsDataJSON);
    setRestaurantsData(swRestaurantsDataJSON);
    setDataRequestStatus(swRestaurantsDataStatus);
    setDataLoading(false);
    setIsChecked(!isChecked);
  };

  const handleOnClick = () => {
    setIsChecked(!isChecked);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (dataRequestStatus !== 200) {
    return (<p>Something went wrong with your request.</p>);
  }

  return (
    <>
      <h1 id="pageHeader">Restaurants</h1>
      <label style={{
        position: 'absolute', left: '70%', top: '17%',
      }}
      >
        <input
          id="checker"
          onClick={handleOnClick}
          checked={isChecked}
          style={{ width: '40px' }}
          type="checkbox"
        />
        All Restaurants
      </label>
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
        )
        // eslint-disable-next-line max-len
          : (<RestaurantsTable restaurantsData={restaurantsData} onRestaurantDeleted={deleteRestaurant} />)}
      </Container>

    </>
  );
}
