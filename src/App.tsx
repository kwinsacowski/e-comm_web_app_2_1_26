import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ShopBy from './pages/ShopBy';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/shop" element={<ShopBy />} />
        <Route path="/cart" element={<div className="text-center mt-5"><h2>Cart Page Coming Soon!</h2></div>} />
      </Routes>
    </Router>
  );
};

export default App;
