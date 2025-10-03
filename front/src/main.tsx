import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/auth/Login'
import { AuthProvider } from './features/auth'
import Register from './pages/auth/Register'
import { Profile } from './components/layout/profile'


import './index.css'
const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/login", element: <Login />},
  {path: "/register", element: <Register />},
  {path: "/profile", element: <Profile />}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router= {router}/>
    </AuthProvider>
  </StrictMode>,
)
