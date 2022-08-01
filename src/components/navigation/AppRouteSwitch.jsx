import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from '../page/HomePage';
import CharacterPage from '../page/CharacterPage';
import PlanetsPage from '../page/PlanetsPage';
import StatisticsPage from '../page/StatisticsPage';
import ViewProfilePage from '../page/ViewProfilePage';

export default function AppRouteSwitch() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/planets" element={<PlanetsPage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="/edit-profile" element={<ViewProfilePage />} />
    </Routes>
  );
}
