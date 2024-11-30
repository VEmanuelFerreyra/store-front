export const validateEmail = (email) => {
    if (!email) return 'Debe ingresar su email';
    if (email.length > 130) return 'El email no debe exceder los 130 caracteres';
    if (!/^\S+@\S+\.\S+$/.test(email)) return 'Email inválido';
    return '';
};

export const validatePassword = (password) => {
    if (!password) return 'Debe ingresar una contraseña';
    if (password.length < 6 || password.length > 12) return 'La contraseña debe tener entre 6 y 12 caracteres';
    return '';
};
