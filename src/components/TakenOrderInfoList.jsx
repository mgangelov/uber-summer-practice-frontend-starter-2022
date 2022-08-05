import { ListGroup } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

const ListGroupStyle = {
  display: 'flex',
  width: 700,
  height: 20,
  marginLeft: 'auto',
  marginRight: 'auto',

};

export default function TakenOrderInfoList(props) {
  console.log('Order data ', props.orderData);
  return (
    <ListGroup style={ListGroupStyle}>
      <ListGroup.Item variant="primary">
        Delivery price:&nbsp;
        {props.orderData.delivery_price.toFixed(2)}
      </ListGroup.Item>
      <ListGroup.Item variant="success">
        Restaurant address:&nbsp;
        {props.orderData.restaurant_address}
      </ListGroup.Item>
      <ListGroup.Item variant="danger">
        Client address:&nbsp;
        {props.orderData.client_address}
      </ListGroup.Item>
      <ListGroup.Item variant="warning">
        Client phone number:&nbsp;
        {props.orderData.client_phone_number}
      </ListGroup.Item>
    </ListGroup>
  );
}

TakenOrderInfoList.propTypes = {
  orderData: PropTypes.object,
};
