import React from 'react';
import PropTypes from 'prop-types';

// Component
import Expense from './Expense';

const List = ({ expenses }) => (
    <div className="expenses-incurred">
        <h2>Listado</h2>
        {expenses.map(expense => (
            <Expense
                key={expense.id}
                expense={expense}
            />
        ))}
    </div>
);

List.propTypes = {
    expenses: PropTypes.array.isRequired
}


export default List;