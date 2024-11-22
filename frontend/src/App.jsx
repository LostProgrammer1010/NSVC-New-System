import React from "react"
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import NavBar from "./components/NavBar"
import Poles from "./pages/Poles.jsx"
import ProtectedRoute from "./components/ProtectedRoute"
import "./styles/App.css"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <div class="app-container">
    <link rel="icon" href="#"/>
    <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route
        path="/"
        element={
            <Home />
        }/>
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/register" element={<RegisterAndLogout/>}/>
        <Route path="/poles" element={<Poles/>}/>
        <Route path="*" element={<NotFound />}/>
      
      </Routes>    
    </BrowserRouter>
    </div>
  )
}

export default App
