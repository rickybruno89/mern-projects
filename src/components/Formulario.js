import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {
    const formInitialValues = {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    }

    const [cita, setCita] = useState(formInitialValues)
    const [error, setError] = useState(false)

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setError(false);
        for (const key in cita) {
            if (cita[key] === '') {
                setError(true)
                return;
            }
        }
        crearCita(cita);
        setCita(formInitialValues)
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    return (
        <>
            <h2>Crear cita</h2>
            {
                error && <p className="alerta-error">Todos los campos son obligatorios</p>
            }
            <form
                onSubmit={handleSubmit}
            >
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Ej: Tom"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Ej: Juan"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;