import React, { useState } from 'react';

// Components
import Question from './components/Question';
import Form from './components/Form';

function App() {
  // Define the states
  const [budget, setBudget] = useState(0);
  const [rest, setRest] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true)


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
                <Form />
              </div>
              <div className="one-half column">
                2
            </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
