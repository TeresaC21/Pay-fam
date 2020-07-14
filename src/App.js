import React, { useState, useEffect } from 'react';

// Components
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetaryControl from './components/BudgetaryControl';

function App() {
  // Define the states
  const [budget, setBudget] = useState(0);
  const [rest, setRest] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  // UseEffect that updates the rest
  useEffect(() => {
    // Add new budget
    if (createExpense) {
      setExpenses([
        ...expenses,
        expense
      ]);

      // Rest the budget actually
      const budgetRest = rest - expense.quantityInput;
      setRest(budgetRest);

      //Reset to false after of read condition
      setCreateExpense(false);
    }
  }, [expense, createExpense, expenses, rest])

  // When we add a new spend
  /*   const addNewExpense = expense => {
      setExpenses([
        ...expenses,
        expense
      ])
    } */

  return (
    <div className="container">
      <h1>Presupuesto</h1>

      <div className="content-main content">
        {showQuestion ?
          (
            <Question
              setBudget={setBudget}
              setRest={setRest}
              setShowQuestion={setShowQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>
              <div className="one-half column">
                <List
                  expenses={expenses}
                />
                <BudgetaryControl
                  budget={budget}
                  rest={rest}
                />
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
