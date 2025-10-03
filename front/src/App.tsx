//import { useState } from 'react'
import { JSX } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
function App(): JSX.Element {

  // const [count, setCount] = useState(0)
  return (
    <div className="app-container">
      <h1>Mi App Croteria</h1>
      <nav className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  )
}
export default App
