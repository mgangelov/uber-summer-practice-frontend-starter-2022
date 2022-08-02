/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeleteItemModal from './DeleteItemModal';

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

export default function ItemsTable(props) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
      setShowDeleteModal(false);
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
              <th align="right">Category</th>
              <th align="right">Price</th>
              <th align="right"> </th>
            </tr>
          </thead>
          <tbody>
            {props.itemsData.map((itemData) => (
              <tr key={itemData.item_id}>
                <td>
                  {itemData.name}
                </td>
                <td align="right">{itemData.category}</td>
                <td align="right">{`${itemData.price} BGN`}</td>
                <td align="center">
                  <Link to={`/restaurants/${itemData.restaurant_id}/items/${itemData.item_id}`}>
                    <Button
                      style={{ backgroundColor: 'blue' }}
                    >
                      Update
                    </Button>
                  </Link>
                </td>
                <td align="center">
                  <Button
                    style={{ backgroundColor: 'blue' }}
                    onClick={() => {
                      setSelectedItem(itemData);
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
      {showDeleteModal && <DeleteItemModal visible={showDeleteModal} itemData={selectedItem} onDelete={deleteItem} onClose={() => setShowDeleteModal(false)} />}
    </>
  );
}

ItemsTable.propTypes = {
  itemsData: PropTypes.array,
  onItemDeleted: PropTypes.func,
};
