import React from 'react';
import JsonDisplay from '../MenuItemTable';
// import { Container } from 'react-bootstrap';
// import LoadingContainer from '../common/LoadingContainer';

export default function RestaurantPage() {
  return (
    <div className="Menu">
      <h1>Restaurant: </h1>
      <JsonDisplay />

    </div>
  );
}

