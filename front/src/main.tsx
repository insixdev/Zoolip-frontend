import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './features/auth'

import './index.css'
import PrivateRouter from './components/ui/PrivateRouter'
import { Profile } from './components/layout'
import { Login, Register } from './pages'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/profile",
    element: (
      <PrivateRouter>
        <Profile />
      </PrivateRouter>
    ),
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router= {router}/>
    </AuthProvider>
  </StrictMode>,
)
