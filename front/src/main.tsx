import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './features/Login.tsx'
import { AuthProvider } from './features/auth/authProvider.tsx'

const router = createBrowserRouter([
  {path: "/", element: <App /> },
  {path: "/login", element: <Login />}

])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router= {router}/>
    </AuthProvider>
  </StrictMode>,
)
