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

  const onFormSubmit = () => toggleRestaurantModal(true);

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
