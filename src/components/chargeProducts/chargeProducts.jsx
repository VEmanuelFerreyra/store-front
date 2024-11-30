import { useState, useEffect } from "react";

// Asegúrate de que las validaciones están importadas adecuadamente
import { validateName, validateDescription, validatePrice, validateQuantity, validateImageUrl, validateCategory } from "./validationProducts";

function ChargeProduct() {
    const [mensaje, setMensaje] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [formProduct, setFormProduct] = useState({
        name: "",
        description: "",
        price: "",
        quantity: "",
        imageUrl: "",
        category: "", // ID de la categoría
    });
    const [errors, setErrors] = useState({});
    const [showErrors, setShowErrors] = useState(false);
    const [categories, setCategories] = useState([]); // Para almacenar las categorías

    // Obtener categorías desde la base de datos
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("http://localhost:3000/categories");
                if (response.ok) {
                    const data = await response.json();
                    setCategories(data); // Asume que la respuesta es un array de categorías
                } else {
                    setMensaje("Error al cargar las categorías");
                }
            } catch (error) {
                console.error("Error al obtener categorías:", error);
                setMensaje("Hubo un error al obtener las categorías.");
            }
        };

        fetchCategories();
    }, []);

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormProduct({
            ...formProduct,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowErrors(true);

        // Validaciones
        const nameError = validateName(formProduct.name);
        const descriptionError = validateDescription(formProduct.description);
        const priceError = validatePrice(formProduct.price);
        const quantityError = validateQuantity(formProduct.quantity);
        const imageUrlError = validateImageUrl(formProduct.imageUrl);
        const categoryError = validateCategory(formProduct.category);

        const newErrors = {
            name: nameError,
            description: descriptionError,
            price: priceError,
            quantity: quantityError,
            imageUrl: imageUrlError,
            category: categoryError,
        };

        setErrors(newErrors);

        // Verificar si hay errores
        const hasErrors = Object.values(newErrors).some((error) => error);
        if (hasErrors) return; // Detener si hay errores

        // Convertir precio y categoría a números antes de enviar
        const productData = {
            ...formProduct,
            price: parseFloat(formProduct.price),
            category: parseInt(formProduct.category),
            quantity: parseInt(formProduct.quantity)
        };

        try {
            const response = await fetch("http://localhost:3000/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productData),
            });

            if (response.ok) {
                setMensaje("");
                setFormProduct({
                    name: "",
                    description: "",
                    price: "",
                    quantity: "",
                    imageUrl: "",
                    category: "",
                });
                setErrors({});
                setShowErrors(false);
                setShowToast(true);

                setTimeout(() => setShowToast(false), 3000);
            } else {
                const { message } = await response.json();
                setMensaje(message || "Error al cargar el producto");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            setMensaje("Hubo un error al realizar la solicitud.");
        }
    };

    return (
        <div className="container mt-5">
            {showToast && (
                <div className="alert alert-success position-fixed top-0 end-0 m-3">
                    Producto cargado con éxito
                </div>
            )}

            {mensaje && (
                <div className="alert alert-danger position-fixed top-0 end-0 m-3">
                    {mensaje}
                </div>
            )}

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="mb-5 text-center">Formulario de Producto</h1>
                    <div className="bg-light p-4 rounded shadow-sm">
                        <h3 className="mb-4">Completa los datos del producto</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Nombre del Producto
                                </label>
                                <input
                                    name="name"
                                    value={formProduct.name}
                                    onChange={manejarCambio}
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingresa el nombre del producto"
                                />
                                {showErrors && errors.name && <p className='text-danger'>{errors.name}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">
                                    Descripción
                                </label>
                                <textarea
                                    name="description"
                                    value={formProduct.description}
                                    onChange={manejarCambio}
                                    className="form-control"
                                    placeholder="Ingresa la descripción"
                                />
                                {showErrors && errors.description && <p className='text-danger'>{errors.description}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">
                                    Precio
                                </label>
                                <input
                                    name="price"
                                    value={formProduct.price}
                                    onChange={manejarCambio}
                                    className="form-control"
                                    type="number"
                                    placeholder="Ingresa el precio"
                                />
                                {showErrors && errors.price && <p className='text-danger'>{errors.price}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="quantity" className="form-label">
                                    Cantidad
                                </label>
                                <input
                                    name="quantity"
                                    value={formProduct.quantity}
                                    onChange={manejarCambio}
                                    className="form-control"
                                    type="number"
                                    placeholder="Ingresa la cantidad"
                                />
                                {showErrors && errors.quantity && <p className='text-danger'>{errors.quantity}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="imageUrl" className="form-label">
                                    URL de la Imagen
                                </label>
                                <input
                                    name="imageUrl"
                                    value={formProduct.imageUrl}
                                    onChange={manejarCambio}
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingresa la URL de la imagen"
                                />
                                {showErrors && errors.imageUrl && <p className='text-danger'>{errors.imageUrl}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">
                                    Categoría
                                </label>
                                <select
                                    name="category"
                                    value={formProduct.category}
                                    onChange={manejarCambio}
                                    className="form-control"
                                >
                                    <option value="">Selecciona una categoría</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                {showErrors && errors.category && <p className='text-danger'>{errors.category}</p>}
                            </div>

                            <button className="btn btn-dark w-100" type="submit">
                                Agregar Producto
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChargeProduct;

