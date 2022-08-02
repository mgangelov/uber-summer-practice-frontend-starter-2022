import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, Col, Modal, Row,
} from 'react-bootstrap';
import item from '../static/item.jpg';

export default function DeleteItemModal(props) {
  const { itemData } = props;

  return (
    <Modal show={props.visible} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Item deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{itemData.name}</Card.Title>
                <Card.Text>
                  <span>
                    Category:
                    {' '}
                    {itemData.category}
                  </span>
                  <br />
                  <span>
                    Price:
                    {' '}
                    {itemData.price}
                    {' '}
                    BGN.
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ display: 'flex' }}>
            <img
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
              }}
              src={item}
              alt="Error"
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ backgroundColor: 'blue' }}
          onClick={() => props.onDelete(itemData.restaurant_id, itemData.item_id)}
        >
          Delete
        </Button>
        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

DeleteItemModal.propTypes = {
  itemData: PropTypes.object,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
};
