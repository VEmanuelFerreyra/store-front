const Home = () => {
  return (
    <div>
      {/* Sección principal */}
      <main>
        <section className="hero bg-dark text-white text-center py-5">
          <div className="container">
            <h1 className="display-4">Bienvenido a TODO MODA</h1>
            <p className="lead">Las mejores tendencias de ropa, siempre a la moda.</p>
          </div>
        </section>

        {/* Sección de imágenes (Productos destacados o Galería) */}
        <section className="container my-5">
          <h2 className="text-center mb-4">Nuestros productos más populares</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://picsum.photos/200/300?random=1" className="card-img-top" alt="Producto 1" />
                <div className="card-body">
                  <h5 className="card-title">Producto 1</h5>
                  <p className="card-text">Descubre lo último en moda, elegante y cómodo.</p>
                  <a href="/productos" className="btn btn-primary">Ver más</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://picsum.photos/200/300?random=2" className="card-img-top" alt="Producto 2" />
                <div className="card-body">
                  <h5 className="card-title">Producto 2</h5>
                  <p className="card-text">El estilo perfecto para cada ocasión.</p>
                  <a href="/productos" className="btn btn-primary">Ver más</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://picsum.photos/200/300?random=3" className="card-img-top" alt="Producto 3" />
                <div className="card-body">
                  <h5 className="card-title">Producto 3</h5>
                  <p className="card-text">Moda actual y a la vanguardia, para que te sientas increíble.</p>
                  <a href="/productos" className="btn btn-primary">Ver más</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Llamada a la acción */}
        <section className="cta bg-light py-5">
          <div className="container text-center">
            <h2>¡Haz de TODO MODA tu lugar de compra preferido!</h2>
            <p>Explora nuestra tienda y encuentra lo que siempre has buscado.</p>
            <a href="/productos" className="btn btn-dark btn-lg">Ir a la tienda</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
