//import { useState } from 'react'
import { JSX } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
function App(): JSX.Element {

  // const [count, setCount] = useState(0)
  return  (
    <>
      <h1>mi app croteria</h1>
      <Link to="login">logearse</Link>
    </>
  )
}
export default App
