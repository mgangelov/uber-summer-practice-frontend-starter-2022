import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Table, Form } from 'react-bootstrap';
// import { Link} from 'react-router-dom'

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
  top: 80,
  position: 'relative',
};


TableContainer.propTypes = {
  children: PropTypes.node,
};

export default function OpenOrdersTable(props) {
  if (props.ordersData.openOrdersData.length === 0) {
    return (
      <TableContainer>
        <p>No data</p>
      </TableContainer>
    );
  }

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
          {props.ordersData.openOrdersData.map(({
            ID, RestaurantAddress, DeliveryAddress, DeliveryPrice,
          }) => (
            <tr key={ID}>
              <td align="right">{RestaurantAddress}</td>
              <td align="right">{DeliveryAddress}</td>
              <td align="right">{DeliveryPrice}</td>
              <td align="center">
              <Form.Check
                onChange={() => props.setOrderData({
                ...props.ordersData,
                selectedOrder: ID
                })}
                name="orders"
                type="radio"  
          />
              </td>

            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={() => alert(props.ordersData.selectedOrder)} style={SubmitButtonStyle}>
          Submit
        </Button>
    </TableContainer>
    
  );
}

OpenOrdersTable.propTypes = {
  openOrdersData: PropTypes.array,
};
