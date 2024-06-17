import { useState } from 'react'
import Card from './components/Card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Kunjesh",
    password: "2004"
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card username="ChaiAurCode" btn_text="Subscribe"/>
      <Card username="JS_Mastery" btn_text="Learn JS"/>
      <Card username="cs50" btn_text="Break into Tech"/>
      <Card username="Hiteshb Choudhary" />
    </>
  )
}

export default App
