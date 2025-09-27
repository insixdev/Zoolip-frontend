import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './pages/auth/Login.tsx'
import { AuthProvider } from './features/auth/authProvider.tsx'
import Register from './pages/auth/Register.tsx'

const router = createBrowserRouter([
  {path: "/", element: <App /> },
  {path: "/login", element: <Login />},
  {path: "/register", element: <Register />}

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router= {router}/>
    </AuthProvider>
  </StrictMode>,
)
