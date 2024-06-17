import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const message = "Copied to Clipboard!";
  const [showCopiedMsg, setShowCopiedMsg] = useState(false);

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*(){}[]~/<>_"

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(randomIndex)
    }
    setPassword(pass)
  },
    [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    // '?' is for "Optional". It executes if passwordRef.current exists.
    // passwordRef.current?.select()
    
    window.navigator.clipboard.writeText(password)

    // Display a msg to user for 2 seconds
    setShowCopiedMsg(true);
    setTimeout(() => setShowCopiedMsg(false), 2000);

  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (

    <div className='w-full max-w-md mx-auto shadow-2xl rounded-2xl px-8 py-6 my-12 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center text-2xl mb-6'>Password Generator</h1>

      {/* Display */}
      <div className='flex items-center shadow-md rounded-lg overflow-hidden mb-4'>

        <input type="text"
          value={password}
          className='outline-none flex-grow py-2 px-4 bg-gray-700 text-white'
          placeholder='Password'
          readOnly
          ref={passwordRef} />

        {/* Copied Msg Display */}
        {showCopiedMsg && (
          <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg w-fit mx-auto mt-4 transition duration-1000 ease-in-out" style={{ opacity: showCopiedMsg ? 1 : 0 }}> {message} </div>
        )}

        {/* Copy Button */}
        <button className='bg-teal-500 text-white px-4 py-2 rounded-tr-lg rounded-br-lg hover:bg-teal-800' onClick={copyPasswordToClipboard}>Copy</button>
      </div>

      {/* Clickables */}
      <div className='flex text-sm gap-x-3'>

        {/* Length Setter */}
        <div className='flex items-center gap-x-1 text-white bg-gray-800'>
          <input type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }} />
          <label>Length : {length}</label>
        </div>

        {/* Nums Checkbox */}
        <div className='flex items-center gap-x-1 text-white'>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numInput"
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }} />
          <label htmlFor="numInput">Numbers</label>
        </div>

        {/* Char Checkbox */}
        <div className='flex items-center gap-x-1 text-white'>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }} />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
