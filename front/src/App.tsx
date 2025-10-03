//import { useState } from 'react'
import { JSX } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { Navbar } from './components/layout/navbar';
function App(): JSX.Element {

  // const [count, setCount] = useState(0)
  return (

    <>
      <Navbar/>
      {/*   <nav className="nav-links"> */}
      {/*     <Link to="/login">Login</Link> */}
      {/*     <Link to="/register">Register</Link> */}
      {/*     <Link to="/profile">Profile</Link> */}
      {/*   </nav> */}

      <h1>Mi App Croteria</h1>

    </>
  );
}
export default App
