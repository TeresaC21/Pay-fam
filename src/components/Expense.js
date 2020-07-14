import React from 'react';

const Expense = ({ expense }) => (
    <li className="expense">
        <p>
            {expense.descriptionInput}
            <span
                className="expense">$ {expense.quantityInput}</span>
        </p>
    </li>
)

export default Expense;