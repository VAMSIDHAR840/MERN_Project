import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Componet/Login'
import Register from './Componet/Register'
import Homepage from './Componet/Homepage'
import Child from './Componet/Child'
const App = () => {
  return (
    <BrowserRouter>
    <Child/>
      <Routes>
        <Route element={<Register />} path='/register' />
        <Route element={<Login />} path='/login' />
        <Route element={<Homepage/>} path='/home' />
      </Routes>
    </BrowserRouter>

  )
}

export default App
