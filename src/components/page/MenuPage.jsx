import React, { useEffect, useState, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import LoadingContainer from '../common/LoadingContainer';
import MenuItemTable, { getItems } from '../MenuItemTable';
import OrderForm from '../OrderForm';

const menuURL = 'http://127.0.0.1:5000/';

const INITIAL_VALUES = {
  CustomerName: '',
  DeliveryAddress: '',
  PhoneNumber: '',
  Cutlery: '',
  AdditionalInfo: '',
  Items: '',
};

function addQuantityToMenuData(menuData) {
  return menuData.map((menuItem) => {
    const menuItemWithQuantity = {
      category: menuItem.category,
      id: menuItem.id,
      name: menuItem.name,
      price: menuItem.price,
      quantity: 0,
    };
    return menuItemWithQuantity;
  });
}

export default function MenuPage() {
  const { restaurantID } = useParams();
  const [menuData, setMenuData] = useState([]);
  const [dataLoading, setDataLoading] = useState([false]);
  const [dataRequestStatus, setDataRequestStatus] = useState(200);
  const [values, setValues] = useState(INITIAL_VALUES);

  const fetchData = useCallback(async () => {
    setDataLoading(true);
    const itemsDataReceived = await fetch(`${menuURL}/restaurant/${restaurantID}/item`);
    const itemsDataStatus = itemsDataReceived.status;
    const itemsDataJSON = await itemsDataReceived.json();
    setMenuData(addQuantityToMenuData(itemsDataJSON));
    setDataRequestStatus(itemsDataStatus);
    setDataLoading(false);
  }, [restaurantID]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-type': 'application/json' },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: data,
    });

    return response.json();
  }

  const onFormSubmit = () => {
    const formData = new FormData();

    formData.append('CustomerName', values.name);
    formData.append('DeliveryAddress', values.address);
    formData.append('PhoneNumber', values.phoneNumber);
    formData.append('Cutlery', values.cutlery);
    formData.append('AdditionalInfo', values.additionalInfo);
    const item = JSON.parse('[{"item_id": 1, "quantity": 2}]');
    formData.append('Items', item);
    postData(`http://localhost:5000/restaurant/${restaurantID}/order`, JSON.stringify(values));
    // ?? redirect
  };

  if (dataRequestStatus !== 200) {
    return (<p>Something went wrong with your request.</p>);
  }
  return (
    <Container style={{

      paddingBottom: '10px',
      paddingTop: '10px',
    }}
    >
      {dataLoading
        ? (<LoadingContainer />) : (<MenuItemTable menuData={menuData} />)}
      <OrderForm values={values} setValues={setValues} onSubmit={onFormSubmit} />
    </Container>
  );
}
