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

export default function AppRouteSwitch() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/planets" element={<PlanetsPage />} /> */}
      {/* <Route exact path="/" element={<HomePage />} /> */}
      <Route path="/orders" element={<OpenOrdersPage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/statistics/:id" element={<StatisticsPage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />
    </Routes>
  );
}
