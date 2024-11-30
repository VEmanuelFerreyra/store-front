// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      {/* Título principal */}
      <h1 className="text-center mb-4">Sobre TODO MODA</h1>

      {/* Sección de Descripción */}
      <div className="row">
        <div className="col-md-6">
          <h3>Bienvenidos a TODO MODA</h3>
          <p>
            En **TODO MODA**, nos apasiona ofrecer lo último en tendencias de ropa para todos los gustos y estilos.
            Desde prendas casuales hasta las más elegantes, nuestro objetivo es que te sientas cómodo y a la moda
            con cada prenda que elijas.
          </p>
          <p>
            Con más de 10 años en el mercado, nuestra tienda online ofrece una experiencia de compra fácil y segura,
            con productos de alta calidad y precios accesibles para todos.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500x300.png?text=TODO+MODA"
            alt="Imagen de tienda TODO MODA"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Sección de Misión y Visión */}
      <div className="row mt-5">
        <div className="col-md-6">
          <h4>Misión</h4>
          <p>
            Nuestra misión es proporcionar a nuestros clientes una experiencia de compra excepcional, ofreciéndoles
            productos que combinan calidad, comodidad y las últimas tendencias de la moda.
          </p>
        </div>
        <div className="col-md-6">
          <h4>Visión</h4>
          <p>
            Ser la tienda de ropa online más reconocida por su atención al cliente, su amplia variedad de productos
            y su capacidad para adaptarse a las necesidades de cada persona.
          </p>
        </div>
      </div>

      {/* Sección de Servicios */}
      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <h5>Entrega Rápida</h5>
          <p>
            Ofrecemos envíos rápidos a todo el país para que puedas disfrutar de tus compras sin esperar mucho tiempo.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h5>Devoluciones Fáciles</h5>
          <p>
            Si no estás satisfecho con tu compra, realizamos devoluciones de forma sencilla y sin complicaciones.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <h5>Atención al Cliente</h5>
          <p>
            Nuestro equipo de atención al cliente está siempre disponible para ayudarte en lo que necesites.
          </p>
        </div>
      </div>

      {/* Sección de Llamado a la acción */}
      <div className="text-center mt-5">
        <a href="/productos" className="btn btn-primary btn-lg">
          ¡Explora nuestras colecciones!
        </a>
      </div>
    </div>
  );
};

export default About;
