import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import item from '../../static/item.jpg';
import UpdateItemForm from '../UpdateItemForm';
import ItemModal from '../ItemModal';

const itemsAPI_URL = 'http://127.0.0.1:5000';

const INITIAL_VALUES = {
  name: '',
  category: '',
  price: ' ',
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

export default function UpdateItemPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [showItemModal, toggleItemModal] = useState(false);
  const [logoSrc, setLogoSrc] = useState();
  const { restaurant_id } = useParams();
  const { item_id } = useParams();

  const fetchData = async () => {
    // setDataLoading(true);
    const itemsData = await fetch(`${itemsAPI_URL}/restaurants/${restaurant_id}/items/${item_id}`);
    // const swItemsDataStatus = swItemsData.status;
    const itemsDataJSON = await itemsData.json();
    console.log(itemsDataJSON);
    setValues(itemsDataJSON);
    // setDataRequestStatus(swItemsDataStatus);
    // setDataLoading(false);
  };

  useEffect(() => {
    setLogoSrc(item);
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
    formData.append('category', values.category);
    formData.append('price', values.price);

    postData(`http://localhost:5000/restaurants/${restaurant_id}/items/${item_id}`, formData);
    toggleItemModal(true);
  };

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
        <p>Please update item</p>
        <UpdateItemForm values={values} setValues={setValues} onSubmit={onFormSubmit} />
      </Container>
      <ItemModal itemData={values} visible={showItemModal} onClose={onModalClose} />
    </>
  );
}
