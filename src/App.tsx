import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ShopBy from './pages/ShopBy';
import Electronics from './pages/Elctronics';
import Jewelry from './pages/Jewlery';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/shop" element={<ShopBy />} />
        <Route path="/cart" element={<div className="text-center mt-5"><h2>Cart Page Coming Soon!</h2></div>} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
      </Routes>
    </Router>
  );
};

export default App;
