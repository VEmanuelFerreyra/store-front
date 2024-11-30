import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormRegister from './components/formRegister/formRegister';
import Navbar from './components/navbar/navbar';
import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Footer from './components/footer/footer';
import FormLogin from './components/formLogin/formLogin';
import Products from './components/products/products';
import ChargeProduct from './components/chargeProducts/chargeProducts';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route path='/register' Component={FormRegister}></Route>
        <Route path='/contacto' Component={About}></Route>
        <Route path='/login' Component={FormLogin}></Route>
        <Route path='/productos' Component={Products}></Route>
        <Route path='/cargarProductos' Component={ChargeProduct}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
