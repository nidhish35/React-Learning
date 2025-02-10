import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)    // returns an array with two elements [0, function]
  // let counter = 1

  const addValue = () => {
    // counter += 1
    setCounter(counter + 1)
    console.log(counter)
  }
  const lessValue = () => {
    // counter -= 1
    setCounter(counter - 1)
    console.log(counter)
  }
  return (
    <>
    <h1>Counter {counter}</h1>
    <button onClick={addValue}> Increase</button>
    <br />
    <button onClick={lessValue}>Decrease</button>
    </>
  )
}

export default App
