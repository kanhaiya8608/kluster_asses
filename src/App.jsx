// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Navbar from './components/Navbar';
import { StoreProvider } from './store/StoreContext';
import ProductDescription from './pages/ProductDescription';
import Shop from './pages/Shop';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Shop />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/product/:name/:id" element={<ProductDescription />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
