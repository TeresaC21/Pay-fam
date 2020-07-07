import React, { Fragment, useState } from 'react';

// Components
import Error from './Error';

const Question = () => {

    // Define state quantity
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false)

    // Function that read the budget
    const defineBudget = e => {
        setQuantity(parseInt(e.target.value, 10));
    }

    // Submit for define the budget
    const addBudget = e => {
        e.preventDefault();

        // Validate
        if (quantity < 1 || isNaN(quantity)) {
            setError(true);
            return;
        }

        // if the validation is passed
        setError(false);

    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error menssage="El Presupuesto es Incorrecto" /> : null}
            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={defineBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Question;