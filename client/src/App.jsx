import React from "react"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Home from "./pages/Home.jsx"
import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext.jsx"
function App() {
  const { authuser } = useAuthContext();
  return (
    <>
      <div className="p-4 flex justify-center items-center h-screen">
        <Routes>
          <Route path="/" element={authuser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path="/login" element={authuser ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={authuser ? <Navigate to="/" /> : <Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
