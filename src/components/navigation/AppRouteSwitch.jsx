import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from '../page/HomePage';
import CharacterPage from '../page/CharacterPage';
import PlanetsPage from '../page/PlanetsPage';
import RestaurantsPage from '../page/RestaurantsPage';
import ItemPage from '../page/ItemPage';
import ItemsPage from '../page/ItemsPage';

export default function AppRouteSwitch() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/planets" element={<PlanetsPage />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/items" element={<ItemsPage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/item" element={<ItemPage />} />
    </Routes>
  );
}
