import { useState } from 'react'
import './App.css'
import Approutes from './Routes/Approutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Approutes />
    </>
    
  )
}

export default App
