import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from '../page/HomePage';
import CharacterPage from '../page/CharacterPage';
import PlanetsPage from '../page/PlanetsPage';
import OrdersPage from '../page/OrdersPage';
<<<<<<< HEAD
import MenuPage from '../page/MenuPage';
=======
import RestaurantPage from '../page/RestaurantPage';
import OrderStatusPage from '../page/OrderStatusPage';
>>>>>>> main

export default function AppRouteSwitch() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/planets" element={<PlanetsPage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/orders" element={<OrdersPage />} />
<<<<<<< HEAD
      <Route path="/restaurant/:restaurantID" element={<MenuPage />} />
=======
      <Route path="/restaurant/:restaurantID" element={<RestaurantPage />} />
      <Route path="/orderstatus" element={<OrderStatusPage />} />
>>>>>>> main
    </Routes>
  );
}
