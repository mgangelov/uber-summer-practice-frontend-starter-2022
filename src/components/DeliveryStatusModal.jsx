import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, Col, Modal, Row,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function DeliveryStatusModal(props) {
  const { deliveryStatus } = props;
  const navigate = useNavigate();
  return (
    <Modal show={props.visible} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delivery status is changed to</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{deliveryStatus}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => navigate('/orders')}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

DeliveryStatusModal.propTypes = {
  deliveryStatus: PropTypes.string,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};
