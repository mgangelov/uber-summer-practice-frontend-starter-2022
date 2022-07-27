import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, Col, Modal, Row,
} from 'react-bootstrap';
import republicLogo from '../static/republicLogo.png';
import empireLogo from '../static/empireLogo.png';

export default function CharacterModal(props) {
  const { characterData } = props;

  return (
    <Modal show={props.visible} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your character submission</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{characterData.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{`${characterData.affinity === 'light' ? 'Light' : 'Dark'} character`}</Card.Subtitle>
                <Card.Text>
                  {characterData.age}
                  {' '}
                  years old. Email:
                  {' '}
                  {characterData.email}
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
              src={characterData.affinity === 'light' ? republicLogo : empireLogo}
              className="republic-logo"
              alt="republic-logo"
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

CharacterModal.propTypes = {
  characterData: PropTypes.object,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};
