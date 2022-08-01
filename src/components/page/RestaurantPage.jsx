import React from 'react';
import MenuItemTable from '../MenuItemTable';
import MenuPage from './MenuItemPage';
// import { Container } from 'react-bootstrap';
// import LoadingContainer from '../common/LoadingContainer';

export default function RestaurantPage() {
  return (
    <div className="Menu">
      <h1>Restaurant: </h1>
      <MenuPage />
      <MenuItemTable />
    </div>
  );
}
