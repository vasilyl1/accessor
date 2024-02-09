import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/PageNotFound';
import '../css/styles.css';

// In the main App component, only single instances of Header, Navigtion and Footer
//  are rendered and several instances of Project
function App() {
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
              path='*'
              element={<PageNotFound />} 
        />
      </Routes>
    </Router>
  );
}

export default App;