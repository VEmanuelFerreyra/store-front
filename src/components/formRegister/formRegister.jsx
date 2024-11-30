import { useState } from "react";
import {
    validateConfirmPassword,
    validateEmail,
    validateName,
    validatePassword,
} from "./validationsFormRegister";

function FormRegister() {
    const [mensaje, setMensaje] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [formRegister, setFormRegister] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [showErrors, setShowErrors] = useState(false);

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormRegister({
            ...formRegister,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowErrors(true);

        // Validaciones
        const nameError = validateName(formRegister.name);
        const emailError = validateEmail(formRegister.email);
        const passwordError = validatePassword(formRegister.password);
        const confirmPasswordError = validateConfirmPassword(
            formRegister.password,
            formRegister.confirmPassword
        );

        const newErrors = {
            name: nameError,
            email: emailError,
            password: passwordError,
            confirmPassword: confirmPasswordError,
        };

        setErrors(newErrors);

        // Verificar si hay errores
        const hasErrors = Object.values(newErrors).some((error) => error);
        if (hasErrors) return; // Detener si hay errores

        try {
            const response = await fetch("http://localhost:3000/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formRegister),
            });

            if (response.ok) {
                setMensaje("");
                setFormRegister({ name: "", email: "", password: "", confirmPassword: "" });
                setErrors({});
                setShowErrors(false);
                setShowToast(true);

                setTimeout(() => setShowToast(false), 3000);
            } else {
                const { message } = await response.json();
                setMensaje(message || "Error al crear el usuario");
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
                    Usuario creado con éxito
                </div>
            )}

            {mensaje && (
                <div className="alert alert-danger position-fixed top-0 end-0 m-3">
                    {mensaje}
                </div>
            )}

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="mb-5 text-center">Formulario de Registro</h1>
                    <div className="bg-light p-4 rounded shadow-sm">
                        <h3 className="mb-4">Completa tus datos</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    name="name"
                                    value={formRegister.name}
                                    onChange={manejarCambio}
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingresa tu nombre"
                                />
                                {showErrors && errors.name && (
                                    <p className='text-danger'>{errors.name}</p>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    value={formRegister.email}
                                    onChange={manejarCambio}
                                    className="form-control"
                                    type="email"
                                    placeholder="Ingresa tu email"
                                />
                                {showErrors && errors.email && (
                                    <p className='text-danger'>{errors.email}</p>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Contraseña
                                </label>
                                <input
                                    name="password"
                                    value={formRegister.password}
                                    onChange={manejarCambio}
                                    className="form-control"
                                    type="password"
                                    placeholder="Ingresa una contraseña"
                                    autoComplete="new-password"
                                />
                                {showErrors && errors.password && (
                                    <p className='text-danger'>{errors.password}</p>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">
                                    Confirmar contraseña
                                </label>
                                <input
                                    name="confirmPassword"
                                    value={formRegister.confirmPassword}
                                    onChange={manejarCambio}
                                    className="form-control"
                                    type="password"
                                    placeholder="Reingresa la contraseña"
                                />
                                {showErrors && errors.confirmPassword && (
                                    <p className='text-danger'>{errors.confirmPassword}</p>
                                )}
                            </div>

                            <button className="btn btn-dark w-100" type="submit">
                                Registrarse
                            </button>

                            <div className="mt-3 text-center">
                                <p>
                                    ¿Ya tienes una cuenta?{" "}
                                    <a href="/login" className="text-decoration-none">
                                        Iniciar Sesión
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormRegister;
