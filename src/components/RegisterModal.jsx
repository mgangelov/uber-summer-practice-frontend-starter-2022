import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Col, Modal, Row,} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function RegisterModal(props) {
  const { registerData } = props;
  const navigate = useNavigate();
  return (
    <Modal show={props.visible} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your new registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{registerData.name}</Card.Title>
                <Card.Text>
                  {' '}
                  Email:
                  {' '}
                  {registerData.email}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={ () => navigate('/login')}>

          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

RegisterModal.propTypes = {
  registerData: PropTypes.object,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};
