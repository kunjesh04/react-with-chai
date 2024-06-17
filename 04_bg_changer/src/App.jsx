import { useState } from 'react'
import MyButton from './components/MyButton'
import './App.css'

function App() {
  const [color, setColor] = useState('red')

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <MyButton mycolor="Red" onClick={() => setColor('red')} />
          <MyButton mycolor="Green" onClick={() => setColor('green')} />
          <MyButton mycolor="Blue" onClick={() => setColor('blue')} />
          <MyButton mycolor="Black" onClick={() => setColor('black')} />
          <MyButton mycolor="Pink" onClick={() => setColor('pink')} />
          <MyButton mycolor="Teal" onClick={() => setColor('teal')} />
          <MyButton mycolor="Cyan" onClick={() => setColor('cyan')} />
        </div>
      </div>
    </div>
  )
}

export default App
