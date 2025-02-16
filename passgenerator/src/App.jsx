import { useState , useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialAllowed, setSpecialAllowed] = useState(false)

  const passwordRef = useRef(null)

  const copyPass = useCallback( () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    alert("Password copied")
  }, [password])

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    let numbers = "0123456789"
    let special = "!@#$%^&*()_+"

    if (numberAllowed) str += numbers
    if (specialAllowed) str += special

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)
  } , [length, numberAllowed, specialAllowed, setPassword])

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, specialAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 p-8 bg-gray-700'>
        <h1 className='text-center mb-3 text-3xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg bg-white mb-4'>
          <input className='ml-4 p-2'
          type="text"
          value={password}
          placeholder='password'
          readOnly
          ref={passwordRef} />
        <button onClick={copyPass} className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer ml-35'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input className='cursor-pointer '
            onChange={(e) => {setLength(e.target.value)}}
            type="range"
            min={6}
            max={16}
            value={length} />
            <label className='text-white mr-3'>Length : {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input className='mt-1'
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }} />
            <label className='text-white'>Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input className='mt-1'
            type="checkbox"
            defaultChecked={specialAllowed}
            id="specialInput"
            onChange={() => {
              setSpecialAllowed((prev) => !prev);
            }} />
            <label className='text-white'>Specials</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
