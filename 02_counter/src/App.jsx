import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 0;
  const [counter, setCounter] = useState(0)
  
  const increment = () => {
    // counter = counter + 1
    setCounter(counter+1)
    // console.log('Value Increased', Math.random());
    // console.log('Updated Value : ', {counter})
  }

  const decrement = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Let's make it Count!</h1>
      <h2>Counter Value : {counter} </h2>

      <button onClick={increment}>Increase</button>
      <button onClick={()=>{ setCounter(counter**2)}}>Square It</button>
      <button onClick={decrement}>Decrease</button>
      <div>
        <button onClick={()=>{setCounter(0)}}>Reset</button>
      </div>
    </>
  )
}

export default App
