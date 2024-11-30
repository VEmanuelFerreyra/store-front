import { useEffect, useState } from "react";

function Products() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState(""); // "asc" o "desc"

    // Cargar productos y categorías al inicio
    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    // Actualizar productos filtrados al cambiar categoría o orden
    useEffect(() => {
        let filtered = products;

        // Filtrar por categoría
        if (selectedCategory !== "all") {
            filtered = products.filter((product) => product.category.id === Number(selectedCategory));
        }

        // Ordenar por precio
        if (sortOrder === "asc") {
            filtered = [...filtered].sort((a, b) => a.price - b.price);
        } else if (sortOrder === "desc") {
            filtered = [...filtered].sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(filtered);
    }, [products, selectedCategory, sortOrder]);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:3000/products");
            const data = await response.json();
            console.log("Productos cargados:", data); // ¿Los productos tienen categoryId?
            setProducts(data);
            setFilteredProducts(data);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch("http://localhost:3000/categories");
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error("Error al obtener las categorías:", error);
        }
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        console.log("Categoría seleccionada:", e.target.value); // ¿Es el ID correcto?
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Productos</h1>

            <div className="mb-4 d-flex justify-content-between align-items-center">
                {/* Filtro por categoría */}
                <div>
                    <label htmlFor="category" className="form-label me-2">Categoría:</label>
                    <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="form-select d-inline-block w-auto">
                        <option value="all">Todas</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Ordenar por precio */}
                <div>
                    <label htmlFor="sortOrder" className="form-label me-2">Ordenar por precio:</label>
                    <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange} className="form-select d-inline-block w-auto">
                        <option value="">Sin orden</option>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                </div>
            </div>

            {/* Lista de productos */}
            <div className="row">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="card-img-top"
                                style={{ maxHeight: "400px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text overflow-auto" style={{ maxHeight: '100px' }}>
                                    {product.description}
                                </p>
                                <p className="card-text fs-4">Precio: <strong>${product.price}</strong></p>
                                <p className="card-text"><strong>Cantidad:</strong> {product.quantity}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
