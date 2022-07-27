import React from 'react';
import PropTypes from 'prop-types';
import { Container, Spinner } from 'react-bootstrap';

export default function LoadingContainer({ height = 900 }) {
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: `${height}px`,
      }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
}

LoadingContainer.propTypes = {
  height: PropTypes.number,
};
