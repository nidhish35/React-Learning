import { useState, useCallback, useEffect, useRef } from "react";


function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialAllowed, setSpecialAllowed] = useState(false);

  const passwordRef = useRef(null);

  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert("Password copied!");
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let special = "!@#$%^&*()_+";

    if (numberAllowed) str += numbers;
    if (specialAllowed) str += special;

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [length, numberAllowed, specialAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, specialAllowed, passwordGenerator]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700">
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-8 bg-gray-800 text-white">
        <h1 className="text-center mb-4 text-3xl font-semibold">Password Generator</h1>
        <div className="flex items-center shadow rounded-lg bg-gray-900 p-2 mb-4">
          <input
            className="flex-1 bg-transparent text-lg p-2 focus:outline-none"
            type="text"
            value={password}
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPass} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-y-3 text-sm">
          <div className="flex items-center justify-between">
            <label className="text-gray-300">Length: {length}</label>
            <input
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
              type="range"
              min={6}
              max={16}
              value={length}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-gray-300">Include Numbers</label>
            <input
              className="cursor-pointer"
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-gray-300">Include Special Characters</label>
            <input
              className="cursor-pointer"
              type="checkbox"
              defaultChecked={specialAllowed}
              onChange={() => setSpecialAllowed((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
