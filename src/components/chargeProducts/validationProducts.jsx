export const validateName = (name) => {
    if (!name) return "Debe ingresar el nombre del producto";
    if (name.length > 100) return "El nombre no debe exceder los 100 caracteres";
    return "";
};

export const validateDescription = (description) => {
    if (!description) return "Debe ingresar una descripción";
    if (description.length > 500) return "La descripción no debe exceder los 500 caracteres";
    return "";
};

export const validatePrice = (price) => {
    if (!price) return "Debe ingresar el precio";
    if (price <= 0) return "El precio debe ser un número positivo";
    return "";
};

export const validateQuantity = (quantity) => {
    if (!quantity) return "Debe ingresar la cantidad disponible";
    if (quantity < 1) return "La cantidad debe ser al menos 1";
    return "";
};

export const validateImageUrl = (imageUrl) => {
    if (!imageUrl) return "Debe ingresar la URL de la imagen";
    
    return "";
};

export const validateCategory = (category) => {
    if (!category) {
        return "Por favor selecciona una categoría";
    }
    if (isNaN(category) || category <= 0) {
        return "La categoría seleccionada no es válida";
    }
    return ""; // Si no hay error, se devuelve una cadena vacía
};
