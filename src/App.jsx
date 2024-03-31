import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './React_Redux_Fetch_Data/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Todos/>
    </>
  )
}

export default App
