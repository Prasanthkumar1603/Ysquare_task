import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './chart/header';
import Sidebar from './chart/sidebar';
import Dashboard from './chart/chart';
import Reports from './chart/report';
import Settings from './chart/settings';
import './App.css';

const App = () => {
  return (

    <Router>
      <Header />

      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
