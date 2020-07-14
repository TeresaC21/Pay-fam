import React, { useState } from 'react';

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

  // When we add a new spend
  const addNewExpense = expense => {
    setExpenses([
      ...expenses,
      expense
    ])
  }

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
                  addNewExpense={addNewExpense}
                />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
