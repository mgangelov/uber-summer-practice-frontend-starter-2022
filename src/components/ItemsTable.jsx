/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Table } from 'react-bootstrap';

function TableContainer(props) {
  return (
    <Container style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '200px',
    }}
    >
      {props.children}
    </Container>
  );
}

TableContainer.propTypes = {
  children: PropTypes.node,
};

export default function ItemsTable(props) {
  if (props.itemsData.length === 0) {
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
            <th>Item_id</th>
            <th align="right">Name</th>
            <th align="right">Category</th>
            <th align="right">Price</th>
            <th align="right">Restaurant_id</th>
          </tr>
        </thead>
        <tbody>
          {props.itemsData.map(({
            item_id, name, category, price, restaurant_id,
          }) => (
            <tr key={item_id}>
              <td>
                {item_id}
              </td>
              <td align="right">{name}</td>
              <td align="right">{`${category}`}</td>
              <td align="right">{`${price}`}</td>
              <td align="right">{`${restaurant_id}`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

ItemsTable.propTypes = {
  itemsData: PropTypes.array,
};
