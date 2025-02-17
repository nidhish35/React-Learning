import { useState } from 'react'
import './App.css'
import './index.css'
import Button from './Button.jsx'
function App() {
  const [colur, setColur] = useState('red')
  return (
    <>
      <div className='h-screen max-w-full flex justify-center items-center ' style={{backgroundColor: colur}}>
        
        <div className='w-200 h-10 bg-gray-400 rounded flex justify-evenly items-center'>
          <Button color={"RED"} wow ="red" onClick = {() => setColur("red")} />
          <Button color={"GREEN"} wow ="green" onClick = {() => setColur("green")}/>
          <Button color={"BLUE"} wow ="blue" onClick = {() => setColur("blue")}/>
          <Button color={"PURPLE"} wow ="purple" onClick = {() => setColur("purple")}/>
          <Button color={"BLACK"} wow ="black" onClick = {() => setColur("black")}/>
          
        </div>
      </div>
    </>
  )
}

export default App
