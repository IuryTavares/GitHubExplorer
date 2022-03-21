/* eslint-disable react/function-component-definition */
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const RoutesPath: React.FC = () => (
  <Routes>
    <Route
      path="/dashboard"
      element={<Dashboard />}
    />
    <Route
      path="/repository"
      element={<Repository />}
    />
  </Routes>
);

export default RoutesPath;
