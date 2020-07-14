import React from 'react';

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


export default List;