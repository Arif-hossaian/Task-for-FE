import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import User from './pages/dashboard/User';
import Sales from './pages/dashboard/Sales';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<User />} />
            <Route path="/sales" element={<Sales />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
