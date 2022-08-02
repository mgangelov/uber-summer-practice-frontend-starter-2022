import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import rest from '../../static/rest.jpg';
import UpdateRestaurantForm from '../UpdateRestaurantForm';

// eslint-disable-next-line camelcase
const restAPI_URL = 'http://127.0.0.1:5000';

const INITIAL_VALUES = {
  name: '',
  address: '',
  deliveryPrice: '',
  openHours: '',
  closeHours: '',
};

function ImageContainer(props) {
  return (
    <Container style={{
      height: '400px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '10px',
      borderRadius: '80px',
    }}
    >
      {props.children}
    </Container>
  );
}

ImageContainer.propTypes = {
  children: PropTypes.node,
};

export default function UpdateRestaurantPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [logoSrc, setLogoSrc] = useState();
  const { restaurant_id } = useParams();

  const fetchData = async () => {
    const restaurantData = await fetch(`${restAPI_URL}/restaurants/${restaurant_id}`);
    const data = await restaurantData.json();

    setValues({
      name: data.name,
      address: data.address,
      deliveryPrice: data.delivery_price,
      openHours: data.open_hours,
      closeHours: data.close_hours,
    });
  };

  useEffect(() => {
    setLogoSrc(rest);
    fetchData();
  }, []);

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        // 'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data, // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
  }

  const onFormSubmit = () => {
    const formData = new FormData();

    formData.append('name', values.name);
    formData.append('address', values.address);
    formData.append('delivery_price', values.deliveryPrice);
    formData.append('open_hours', values.openHours);
    formData.append('close_hours', values.closeHours);

    // eslint-disable-next-line camelcase
    postData(`http://localhost:5000/restaurants/${restaurant_id}`, formData);

  };


  return (
    <Container style={{
      paddingTop: '30px',
      paddingBottom: '10px',
    }}
    >
      <ImageContainer>
        <img
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            borderRadius: '40px',
          }}
          src={logoSrc}
          className="rest"
          alt="Error"
        />
      </ImageContainer>
      <p>Please update restaurant</p>
      <UpdateRestaurantForm values={values} setValues={setValues} onSubmit={onFormSubmit} />
    </Container>
  );
}
