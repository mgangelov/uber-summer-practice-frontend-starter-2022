import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import CharacterPage from '../page/CharacterPage';
import PlanetsPage from '../page/PlanetsPage';
import Login from '../page/Login';
import Register from '../page/Register';

export default function AppRouteSwitch() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/planets" element={<PlanetsPage />} />
      <Route path="/character" element={<CharacterPage />} />
    </Routes>
  );
}
