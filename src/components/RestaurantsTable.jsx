import React from 'react';
import PropTypes from 'prop-types';
import { Container, Table } from 'react-bootstrap';

function TableContainer(props) {
  return (
    <Container style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '900px',
    }}
    >
      {props.children}
    </Container>
  );
}

TableContainer.propTypes = {
  children: PropTypes.node,
};

export default function RestaurantsTable(props) {
  if (props.restaurantsData.length === 0) {
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
            backgroundColor: 'aqua',
          }}
          >
            <th>Name</th>
            <th align="right">Address</th>
            <th align="right">Delivery price</th>
            <th align="right">Opening hours</th>
            <th align="right">Closing hours</th>
          </tr>
        </thead>
        <tbody>
          {props.restaurantsData.map(({
            name, address, delivery_price, opening, closing,
          }) => (
            <tr key={name}>
              <td>
                {name}
              </td>
              <td align="right">{address}</td>
              <td align="right">{`${delivery_price}`}</td>
              <td align="right">{`${opening}`}</td>
              <td align="right">{`${closing}`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

RestaurantsTable.propTypes = {
  restaurantsData: PropTypes.array,
};
