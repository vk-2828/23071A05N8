import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from "./components/Login.jsx"
import RootLayout from './components/RootLayout.jsx'
import Register from './components/Register.jsx';
import Home from './components/Home.jsx'
import AboutPage from './components/AboutPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'
import UserProvider from './contexts/UserContext.jsx'
const browserRouterObj=createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"aboutpage",
        element:<AboutPage/>
      },
      {
        path:"contactpage",
        element:<ContactPage/>
      },
    ]
  }
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
       <RouterProvider router={browserRouterObj}/>
    </UserProvider>
  </StrictMode>,
)
