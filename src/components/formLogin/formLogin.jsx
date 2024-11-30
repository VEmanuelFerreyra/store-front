import { useState } from "react";
import { validateEmail, validatePassword } from "./validationsFormLogin";

function FormLogin() {
    const [mensaje, setMensaje] = useState("");
    const [formLogin, setFormLogin] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [showErrors, setShowErrors] = useState(false);

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormLogin({ ...formLogin, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowErrors(true);

        // Validaciones
        const emailError = validateEmail(formLogin.email);
        const passwordError = validatePassword(formLogin.password);

        const newErrors = { email: emailError, password: passwordError };
        setErrors(newErrors);

        // Verificar errores
        if (Object.values(newErrors).some((error) => error)) return;

        try {
            const response = await fetch("http://localhost:3000/auth/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formLogin),
            });

            if (response.ok) {
                setMensaje("Inicio de sesión exitoso");
                setFormLogin({ email: "", password: "" });
                setErrors({});
                setShowErrors(false);
            } else {
                const { message } = await response.json();
                setMensaje(message || "Error al iniciar sesión");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            setMensaje("Hubo un error al realizar la solicitud.");
        }
    };

    return (
        <div className="container mt-5">
            {mensaje && (
                <div className={`alert ${mensaje.includes("exitoso") ? "alert-success" : "alert-danger"} position-fixed top-0 end-0 m-3`}>
                    {mensaje}
                </div>
            )}

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="mb-5 text-center">Iniciar Sesión</h1>
                    <div className="bg-light p-4 rounded shadow-sm">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    name="email"
                                    value={formLogin.email}
                                    onChange={manejarCambio}
                                    className="form-control"
                                    type="email"
                                    placeholder="Ingresa tu email"
                                />
                                {showErrors && errors.email && <p className='text-danger'>{errors.email}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input
                                    name="password"
                                    value={formLogin.password}
                                    onChange={manejarCambio}
                                    className="form-control"
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                />
                                {showErrors && errors.password && <p className='text-danger'>{errors.password}</p>}
                            </div>

                            <button className="btn btn-dark w-100" type="submit">Iniciar Sesión</button>

                            <div className="mt-3 text-center">
                                <p>
                                    ¿No tienes una cuenta?{" "}
                                    <a href="/register" className="text-decoration-none">Regístrate</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormLogin;
