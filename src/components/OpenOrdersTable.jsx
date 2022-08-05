import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Container, Table, Form,
} from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


function TableContainer(props) {
  return (
    <Container style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '350px',
    }}
    >
      {props.children}
    </Container>
  );
}

const SubmitButtonStyle = {
  width: 80,
  heigth: 20,
  marginLeft: -80,
  borderRadius: 10,
  backgroundColor: 'green',
  color: 'white',
  border: 'white',
  top: 100,
  position: 'relative',
};

TableContainer.propTypes = {
  children: PropTypes.node,
};

export default function OpenOrdersTable(props) {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['x-access-tokens']);

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-tokens': cookies['x-access-tokens'],
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: data,
    });

    return response.json();
  }

  const [selectedOpenOrder, setSelectedOpenOrder] = useState({});
  if (props.ordersData.openOrdersData.length === 0) {
    return (
      <TableContainer>
        <p>No data</p>
      </TableContainer>
    );
  }

  const createDelivery = async () => {
    const INITIAL_VALUES = {
      PhoneNumber: selectedOpenOrder.PhoneNumber,
      RestaurantAddress: selectedOpenOrder.RestaurantAddress,
      DeliveryAddress: selectedOpenOrder.DeliveryAddress,
      ID: selectedOpenOrder.ID,
      DeliveryPrice: selectedOpenOrder.DeliveryPrice,
    };
    
    const response = await postData('http://127.0.0.1:5000/delivery', JSON.stringify(INITIAL_VALUES));
    
    navigate("/delivery/"+ response['delivery_id']);
    

  };

  return (
    <TableContainer>
      <Table striped bordered hover>
        <thead>
          <tr style={{
            backgroundColor: 'darkseagreen',
          }}
          >
            <th>Restaurant address</th>
            <th align="right">Client address</th>
            <th align="right">Delivery price</th>
            <th align="right">Take order</th>
          </tr>
        </thead>
        <tbody>
          {props.ordersData.openOrdersData.map((openOrder) => (
            <tr key={openOrder.ID}>
              <td align="right">{openOrder.RestaurantAddress}</td>
              <td align="right">{openOrder.DeliveryAddress}</td>
              <td align="right">{openOrder.DeliveryPrice}</td>
              <td align="center">
                <Form.Check
                  onChange={() => setSelectedOpenOrder(openOrder)}
                  name="orders"
                  type="radio"
                />
              </td>

            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={() => createDelivery()} style={SubmitButtonStyle}>
        Submit
      </Button>
    </TableContainer>

  );
}

OpenOrdersTable.propTypes = {
  openOrdersData: PropTypes.array,
};
