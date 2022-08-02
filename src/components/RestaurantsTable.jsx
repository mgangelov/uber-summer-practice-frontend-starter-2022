import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeleteRestaurantModal from './DeleteRestaurantModal';

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
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
      props.onRestaurantDeleted(restaurantId);
      setShowDeleteModal(false);
    }).catch((err) => {
      console.error(err);
    });
  }

  function updateRestaurant(restaurantId) {
    fetch(`http://localhost:5000/restaurants/${restaurantId}`, {
      method: 'POST',
    }).then(() => {
      console.log('updated');
    }).catch((err) => {
      console.error(err);
    });
  }

  return (
    <>
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
            {props.restaurantsData.map((restaurantData) => (
              <tr key={restaurantData.restaurant_id}>
                <td>
                  {restaurantData.name}
                </td>
                <td align="right">{restaurantData.address}</td>
                <td align="right">{`${restaurantData.delivery_price}`}</td>
                <td align="right">{`${restaurantData.opening}`}</td>
                <td align="right">{`${restaurantData.closing}`}</td>
                <td align="center">
                  <Link to={`/restaurants/${restaurantData.restaurant_id}/items`}>
                    <Button style={{
                      backgroundColor: 'blue',

                    }}
                    >
                      Menu
                    </Button>
                  </Link>
                </td>
                <td align="center">
                  <Link to={`/restaurants/${restaurantData.restaurant_id}`}>
                    <Button
                      style={{ backgroundColor: 'blue' }}
                      onClick={() => updateRestaurant(restaurantData.restaurant_id)}
                    >
                      Update
                    </Button>
                  </Link>
                </td>
                <td align="center">
                  <Button
                    style={{ backgroundColor: 'blue' }}
                    onClick={() => {
                      setSelectedRestaurant(restaurantData);
                      setShowDeleteModal(true);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      {showDeleteModal && <DeleteRestaurantModal visible={showDeleteModal} restaurantData={selectedRestaurant} onDelete={deleteRestaurant} onClose={() => setShowDeleteModal(false)} />}
    </>
  );
}

RestaurantsTable.propTypes = {
  restaurantsData: PropTypes.array,
  onRestaurantDeleted: PropTypes.func,
};
