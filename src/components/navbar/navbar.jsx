const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fs-4">
      <div className="container">
        {/* Logo de la tienda */}
        <a className="navbar-brand" href="/">
          <img 
            src="/logo-store.svg" 
            alt="Logo MiTienda" 
            width="100" 
            height="100" 
            className="d-inline-block align-text-top"
          />
        </a>

        {/* Botón hamburguesa para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link text-dark" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/contacto">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/cargarProductos">Cargar Producto</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-dark" href="/login">Iniciar sesión</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/register">Registrarse</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/carrito">🛒 Carrito</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
