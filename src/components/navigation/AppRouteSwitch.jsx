import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import CharacterPage from '../page/CharacterPage';
<<<<<<< Updated upstream
import PlanetsPage from '../page/PlanetsPage';
import Login from '../page/Login';
import Register from '../page/Register';
=======
import OpenOrdersPage from '../page/OpenOrdersPage';

>>>>>>> Stashed changes

export default function AppRouteSwitch() {
  return (
    <Routes>
<<<<<<< Updated upstream
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/planets" element={<PlanetsPage />} />
=======
      <Route exact path="/" element={<HomePage />} />
      <Route path="/orders" element={<OpenOrdersPage />} />
>>>>>>> Stashed changes
      <Route path="/character" element={<CharacterPage />} />
    </Routes>
  );
}
