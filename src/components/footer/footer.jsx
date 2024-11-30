// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Columna de enlaces de navegación */}
          <div className="col-md-3 mb-3">
            <h5>TODO MODA</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">Inicio</a>
              </li>
              <li>
                <a href="/productos" className="text-white text-decoration-none">Productos</a>
              </li>
              <li>
                <a href="/categorias" className="text-white text-decoration-none">Categorías</a>
              </li>
              <li>
                <a href="/contacto" className="text-white text-decoration-none">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Columna de información de contacto */}
          <div className="col-md-3 mb-3">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li><i className="bi bi-telephone-fill"></i> Teléfono: +123 456 789</li>
              <li><i className="bi bi-envelope-fill"></i> Email: contacto@todomoda.com</li>
              <li><i className="bi bi-geo-alt-fill"></i> Dirección: Calle Ficticia 123, Ciudad</li>
            </ul>
          </div>

          {/* Columna de redes sociales */}
          <div className="col-md-3 mb-3">
            <h5>Síguenos</h5>
            <div>
              <a href="https://www.facebook.com/TODO-MODA" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-facebook fs-3"></i>
              </a>
              <a href="https://www.instagram.com/TODO-MODA" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-instagram fs-3"></i>
              </a>
              <a href="https://www.twitter.com/TODO-MODA" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-twitter fs-3"></i>
              </a>
            </div>
          </div>

          {/* Columna de suscripción al boletín */}
          <div className="col-md-3 mb-3">
            <h5>Suscríbete a nuestro boletín</h5>
            <p>Recibe las últimas novedades, promociones y más directamente en tu correo.</p>
            <form action="#" method="post">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Tu correo electrónico" aria-label="Correo electrónico" />
                <button className="btn btn-primary" type="submit">Suscribirse</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Sección de derechos de autor */}
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} TODO MODA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
