import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, Col, Modal, Row,
} from 'react-bootstrap';
import rest from '../static/rest.jpg';

export default function RestaurantModal(props) {
  const { restaurantData } = props;

  return (
    <Modal show={props.visible} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Restaurant deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{restaurantData.name}</Card.Title>
                <Card.Text>
                  <span>
                    Address:
                    {' '}
                    {restaurantData.address}
                  </span>
                  <br />
                  <span>
                    Working Hours:
                    {' '}
                    {restaurantData.openingHours}
                    {' - '}
                    {restaurantData.closingHours}
                  </span>
                  <br />
                  <span>
                    Delivery Price:
                    {' '}
                    {restaurantData.deliveryPrice}
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
              src={rest}
              alt="Error"
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ backgroundColor: 'blue' }}
          onClick={() => props.onDelete(restaurantData.restaurant_id, restaurantData.item_id)}
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

RestaurantModal.propTypes = {
  restaurantData: PropTypes.object,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
};
