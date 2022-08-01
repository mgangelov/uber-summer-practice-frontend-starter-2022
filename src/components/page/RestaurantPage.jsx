import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import rest from '../../static/rest.jpg';
import RestaurantForm from '../RestaurantForm';
import RestaurantModal from '../RestaurantModal';

const INITIAL_VALUES = {
  name: '',
  address: '',
  deliveryPrice: '',
  openingHours: '',
  closingHours: '',
};

function ImageContainer(props) {
  return (
    <Container style={{
      height: '400px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '10px',
    }}
    >
      {props.children}
    </Container>
  );
}

ImageContainer.propTypes = {
  children: PropTypes.node,
};

export default function RestaurantPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [showRestaurantModal, toggleRestaurantModal] = useState(false);
  const [logoSrc, setLogoSrc] = useState();

  useEffect(() => {
    setLogoSrc(rest);
  }, [values.affinity]);

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
    formData.append('opening', values.openingHours);
    formData.append('closing', values.closingHours);

    postData('http://localhost:5000/restaurants', formData);
  };


  const onModalClose = () => {
    toggleRestaurantModal(false);
    setValues(INITIAL_VALUES);
  };



  return (
    <>
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
            }}
            src={logoSrc}
            className="rest"
            alt="Error"
          />
        </ImageContainer>
        <p>Please create a new restaurant</p>
        <RestaurantForm values={values} setValues={setValues} onSubmit={onFormSubmit} />
      </Container>
      {/* eslint-disable-next-line max-len */}
      <RestaurantModal restaurantData={values} visible={showRestaurantModal} onClose={onModalClose} />
    </>
  );
}
