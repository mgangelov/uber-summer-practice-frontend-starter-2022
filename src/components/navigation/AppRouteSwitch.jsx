import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import CharacterPage from '../page/CharacterPage';
// import PlanetsPage from '../page/PlanetsPage';
import StatisticsPage from '../page/StatisticsPage';
import Login from '../page/Login';
import Register from '../page/Register';
import OpenOrdersPage from '../page/OpenOrdersPage';
import EditProfilePage from '../page/EditProfilePage';
import OrderPage from '../page/OrderPage';

export default function AppRouteSwitch() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/orders" element={<OpenOrdersPage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />
      <Route path="/delivery/:id" element={<OrderPage />} />
    </Routes>
  );
}
