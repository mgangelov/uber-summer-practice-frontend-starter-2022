import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import item from '../../static/item.jpg';
import ItemForm from '../ItemForm';
import ItemModal from '../ItemModal';

const INITIAL_VALUES = {
  name: '',
  category: '',
  price: '',
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

// const Item_Page_URL = 'http://127.0.0.1:5000/restaurants/1/items';

export default function ItemPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [showItemModal, toggleItemModal] = useState(false);
  const [logoSrc, setLogoSrc] = useState();

  // const postItems = async () => {
  //   // const data = { name: 'Salad', category: 'salad', price: '12' };
  //   fetch('http://127.0.0.1:5000/restaurants/1/items', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     // eslint-disable-next-line no-undef
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //   // eslint-disable-next-line no-shadow
  //     .then((data) => {
  //       console.log('Success:', data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  // useEffect(() => { postItems(); }, []);

  useEffect(() => {
    setLogoSrc(item);
  });

  const onFormSubmit = () => toggleItemModal(true);

  const onModalClose = () => {
    toggleItemModal(false);
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
              borderRadius: '40px',
            }}
            src={logoSrc}
            className="item"
            alt="Error"
          />
        </ImageContainer>
        <p>Please create a new item</p>
        <ItemForm values={values} setValues={setValues} onSubmit={onFormSubmit} />
      </Container>
      <ItemModal itemData={values} visible={showItemModal} onClose={onModalClose} />
    </>
  );
}
