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
      height: 'S200px',
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

  function deleteRestaurant(restaurantId) {
    fetch(`http://localhost:5000/restaurants/${restaurantId}`, {
      method: 'DELETE',
    }).then(() => {
      console.log('removed');
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
            <th align="right">Address</th>
            <th align="right">Delivery price</th>
            <th align="right">Opening hours</th>
            <th align="right">Closing hours</th>
            <th align="right" />
            <th align="right" />
          </tr>
        </thead>
        <tbody>
          {props.restaurantsData.map(({
            name, address, delivery_price, opening, closing, restaurant_id,
          }) => (
            <tr key={name}>
              <td>
                {name}
              </td>
              <td align="right">{address}</td>
              <td align="right">{`${delivery_price}`}</td>
              <td align="right">{`${opening}`}</td>
              <td align="right">{`${closing}`}</td>
              <td align="center">
                <Link to={`/restaurants/${restaurant_id}/items`}>
                  <Button style={{
                    backgroundColor: 'blue',

                  }}
                  >
                    Menu
                  </Button>
                </Link>
              </td>
              <td align="center">
                <Link to={`/restaurants/${restaurant_id}`}>
                  <Button
                      style={{backgroundColor: 'blue'}}
                  >
                    Update
                  </Button>
                </Link>
              </td>
              <td align="center">
                <Button
                  style={{ backgroundColor: 'blue' }}
                  onClick={() => deleteRestaurant(restaurant_id)}
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

RestaurantsTable.propTypes = {
  restaurantsData: PropTypes.array,
};
