import React, { Fragment, useState } from 'react'
import Error from './Error';


function Form({ busqueda, setBusqueda, setConsulta }) {

    const [error, setError] = useState(false);

    // extraer ciudad y pais
    const { ciudad, pais } = busqueda;

    // función que coloca los elementos en el state
    const handleChange = (e) => {
        // actualizar el state
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // validar
        if (ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        setConsulta(true);
    }

    return (
        <Fragment>
            <form
                onSubmit={handleSubmit}
            >


                <div className="input-field col s12">
                    <input
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        value={ciudad}
                        onChange={handleChange}
                    />
                    <label htmlFor="ciudad">Ciudad: </label>
                </div>

                <div className="input-field col s12">
                    <select
                        name="pais"
                        id="pais"
                        value={pais}
                        onChange={handleChange}
                    >
                        <option value="">Seleccione un país</option>
                        <option value="PE">Perú</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="US">Estados Unidos</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                    </select>
                    <label htmlFor="pais">País: </label>
                </div>

                <div className="input-field col s12">
                    {error ? <Error mensaje="Ambos campos son obligatorios" /> : ''}
                </div>

                <div className="input-field col s12">
                    <button type="submit"
                            className="btn-large btn-block grey darken-1"
                        > Buscar Clima
                    </button>
                </div>
                
            </form>
        </Fragment>
    )
}

export default Form
