import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import LayOutAdmin from './Admin/LayoutAdmin/LayOutAdmin'

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/admin' element={<LayOutAdmin/>} />
     </Routes>
    </>
  )
}

export default App
