import { useState } from 'react';
import './App.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
        setSuccess(false);
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nombre, email, password, confirmPassword } = formData;

        if (!nombre || !email || !password || !confirmPassword) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        if (!validateEmail(email)) {
            setError('El correo electrónico no es válido.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        // Aquí iría la lógica para enviar al backend
        console.log('Registro exitoso:', formData);
        setSuccess(true);
        setFormData({
            nombre: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <div className="page-wrapper">
            <div className="form-container">
                <h2 className="form-title">Registro de Usuario</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nombre completo</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Correo electrónico</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirmar contraseña</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <p className="text-red-600 font-semibold mt-1">{error}</p>}
                    {success && <p className="text-green-600 font-semibold mt-1">¡Registro exitoso!</p>}

                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
