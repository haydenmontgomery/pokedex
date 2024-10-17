import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Pokedex from './components/pokedex/Pokedex'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pokedex />
    </>
  )
}

export default App
