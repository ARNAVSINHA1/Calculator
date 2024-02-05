import React, { useState } from 'react';
import BasicCalculator from './BasicCalculator'; 
import ScientificCalculator from './ScientificCalculator';

function Calculator() {

  const [isScientific, setIsScientific] = useState(false);

  return (
    <div className="calculator">
      <button onClick={() => setIsScientific(prev => !prev)}>
        {isScientific ? 'Basic' : 'Scientific'}  
      </button>
     <h1>Basic Calculator </h1>
      {isScientific ? (
        <ScientificCalculator /> 
      ) : (  
        <BasicCalculator />
      )}

    </div>
  );
}

export default Calculator;