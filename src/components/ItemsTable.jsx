import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

  function deleteItem(restaurantId, itemId) {
    fetch(`http://localhost:5000/restaurants/${restaurantId}/items/${itemId}`, {
      method: 'DELETE',
    }).then(() => {
      props.onItemDeleted(itemId);
    }).catch((err) => {
      console.error(err);
    });
  }

  function updateItem(restaurantId, itemId) {
    fetch(`http://localhost:5000/restaurants/${restaurantId}/items/${itemId}`, {
      method: 'POST',
    }).then(() => {
      console.log('updated');
    }).catch((err) => {
      console.error(err);
    });
  }


  return (
    <TableContainer>
      <Table striped bordered hover>
        <thead>
          <tr style={{
            backgroundColor: 'white',
          }}
          >
            <th>Name</th>
            <th align="right">Category</th>
            <th align="right">Price</th>
            <th align="right"> </th>
          </tr>
        </thead>
        <tbody>
          {props.itemsData.map(({
            name, category, price, item_id, restaurant_id,
          }) => (
            <tr key={name}>
              <td>
                {name}
              </td>
              <td align="right">{category}</td>
              <td align="right">{`${price} BGN`}</td>
              <td align="center">
                <Link to={`/restaurants/${restaurant_id}/items/${item_id}`}>
                  <Button
                    style={{ backgroundColor: 'blue' }}
                    onClick={() => updateItem(restaurant_id, item_id)}
                  >
                    Update
                  </Button>
                </Link>
              </td>
              <td align="center">
                <Button
                  style={{ backgroundColor: 'blue' }}
                  onClick={() => deleteItem(restaurant_id, item_id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

ItemsTable.propTypes = {
  itemsData: PropTypes.array,
  onItemDeleted: PropTypes.func,
};
