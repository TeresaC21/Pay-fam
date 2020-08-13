import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ expense }) => (
    <li className="expense">
        <p>
            {expense.descriptionInput}
            <span
                className="expense">$ {expense.quantityInput}</span>
        </p>
    </li>
)
Expense.propTypes = {
    expense: PropTypes.object.isRequired
}

export default Expense;