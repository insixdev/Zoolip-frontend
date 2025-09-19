//import { useState } from 'react'
import { JSX } from 'react'
import './App.css'
import { AuthProvider } from './features/auth/authProvider.tsx'
import Login from './features/Login.tsx'
import Register from './features/Register.tsx'

function App(): JSX.Element {
  // const [count, setCount] = useState(0)
  return  (
    <>
      <AuthProvider>
        <h1>mi app croteria</h1>
        <Login />
        <Register />
      </AuthProvider>
    </>
  )
}
export default App
