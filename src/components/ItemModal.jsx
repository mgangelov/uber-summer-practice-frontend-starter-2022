import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, Col, Modal, Row,
} from 'react-bootstrap';
import item from '../static/item.jpg';

export default function ItemModal(props) {
  const { itemData } = props;

  return (
    <Modal show={props.visible} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>New item created</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{itemData.name}</Card.Title>
                <Card.Text>
                  <div>
                    Category:
                    {' '}
                    {itemData.category}
                  </div>
                  <div>
                    Price:
                    {' '}
                    {itemData.price}
                    {' '}
                    BGN.
                  </div>
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
        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ItemModal.propTypes = {
  itemData: PropTypes.object,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};
