// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Basket from './pages/Basket';
import { StoreProvider } from './store/StoreContext';
import ProductDescription from './pages/ProductDescription';
import Shop from './pages/Shop';
import Layout from './components/shared/Layout';
import Author from './pages/Author';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/product" element={<Shop />} />
          <Route path="/author" element={<Author />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/product/:name/:id" element={<ProductDescription />} />
          </Route>
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
