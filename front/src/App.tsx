//import { useState } from 'react'
import { JSX } from 'react'
import './App.css'
import { AuthProvider } from './features/auth/authProvider.tsx'
import Login from './features/Login.tsx'

function App(): JSX.Element {
  // const [count, setCount] = useState(0)
  return  (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </>
  )
}
export default App
