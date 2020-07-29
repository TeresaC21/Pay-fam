import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Error from './Error';

const Question = ({ setBudget, setRest, setShowQuestion }) => {

    // Define state quantity
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);

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
        setBudget(quantity);
        setRest(quantity);
        setShowQuestion(false);
    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error message="El Presupuesto es Incorrecto" /> : null}
            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto Ej. $200"
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

Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRest: PropTypes.func.isRequired,
    setShowQuestion: PropTypes.func.isRequired
}

export default Question;