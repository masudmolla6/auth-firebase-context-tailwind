import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Home from './components/Home/Home.jsx'
import Register from './components/Register/Register.jsx'
import LogIn from './components/LogIn/LogIn.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/register", element: <Register></Register> },
      {path:"/login", element:<LogIn></LogIn>}
    ]
  },
  {path:"*",element:<h1>Not Found 404!!!</h1>}
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
