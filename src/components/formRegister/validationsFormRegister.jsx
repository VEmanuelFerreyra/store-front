export const validateName = (name) => {
    if (!name) return 'Debe ingresar su nombre';
    if (name.length > 100) return 'El nombre no debe exceder los 100 caracteres';
    return '';
};

export const validateEmail = (email) => {
    if (!email) return 'Debe ingresar su email';
    if (email.length > 130) return 'El email no debe exceder los 130 caracteres';
    if (!/^\S+@\S+\.\S+$/.test(email)) return 'Email inválido';
    return '';
};

export const validatePassword = (password) => {
    if (!password) return 'Debe ingresar una contraseña';
    if (password.length < 6 || password.length > 12) return 'La contraseña debe tener entre 6 y 12 caracteres';
    if (!/[A-Z]/.test(password)) return 'La contraseña debe tener al menos una letra mayúscula';
    if (!/[a-z]/.test(password)) return 'La contraseña debe tener al menos una letra minúscula';
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return 'La contraseña debe tener al menos un carácter especial';
    return '';
};

export const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) return "Debe confirmar su contraseña";
    if (password !== confirmPassword) return "Las contraseñas no coinciden";
    return "";
};
