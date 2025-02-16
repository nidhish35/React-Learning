import { useState } from 'react'
import './App.css'
import './index.css'
import Button from './assets/button.jsx'
function App() {
  const [colur, setColur] = useState('red')
  return (
    <>
      <div className='bg-green-400 h-screen max-w-full flex justify-center items-center '>
        <div className='w-200 h-10 bg-gray-400 rounded flex justify-evenly items-center'>
          <Button color={"RED"} wow ="red"/>
          <Button color={"GREEN"} wow ="GREEN"/>
          <Button color={"BLUE"} wow ="blue"/>
          <Button color={"PURPLE"} wow ="purple"/>
          <Button color={"BLACK"} wow ="black"/>
          
        </div>
      </div>
    </>
  )
}

export default App
