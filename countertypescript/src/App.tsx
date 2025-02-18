import { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0); // Define `counter` as a number

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1);
    console.log(counter);
  };

  const lessValue = () => {
    setCounter(prevCounter => prevCounter - 1);
    console.log(counter);
  };

  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={addValue}>Increase</button>
      <br />
      <button onClick={lessValue}>Decrease</button>
    </>
  );
};

export default App;
