import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/PageNotFound';
import UnAuthorized from './components/UnAuthorized';
import {Auth, Logout} from './components/Auth';
import '../css/styles.css';
import { AccessorStateProvider } from './utils/context';

// In the main App component, only single instances of Header, Navigtion and Footer
//  are rendered and several instances of Project
function App() {
  return (
    <AccessorStateProvider>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/auth"
          element={<Auth />}
        />
        <Route
          path="/logout"
          element={<Logout />}
        />
         <Route
          path="/notauthorized"
          element={<UnAuthorized />}
        />
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </Router>
    </AccessorStateProvider>
  );
}

export default App;