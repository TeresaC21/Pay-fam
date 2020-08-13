import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Error from './Error';

// Library
import shortid from 'shortid';

const Form = ({ setExpense, setCreateExpense }) => {

    const [descriptionInput, setDescriptionInput] = useState('');
    const [quantityInput, setQuantityInput] = useState("");
    const [error, setError] = useState(false);

    // When the user add a spend
    const addSpend = e => {
        e.preventDefault();

        // Validate
        if (quantityInput < 1 || isNaN(quantityInput) || descriptionInput.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        // Build the spend
        const spend = {
            descriptionInput,
            quantityInput,
            id: shortid.generate()
        }// console.log(spend)

        // Pass the spend to main component
        setExpense(spend);
        setCreateExpense(true);

        // Reset the form inputs
        setDescriptionInput('');
        setQuantityInput("");

    }

    return (
        <form
            onSubmit={addSpend}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error message="Ambos Campos Son Obligatorios ó Presupuesto Incorrecto" /> : null}

            <div className="field">
                <label>Descripción Gasto</label>
                <input
                    type="text"
                    className="u-fll-width"
                    placeholder="Ej. Transporte"
                    value={descriptionInput}
                    onChange={e => setDescriptionInput(e.target.value)}
                />
            </div>
            <div className="field">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-fll-width"
                    placeholder="Ej. 100"
                    value={quantityInput}
                    onChange={e => setQuantityInput(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}
Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired,
}

export default Form;