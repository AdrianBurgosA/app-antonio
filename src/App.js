import React, {useState, useMemo} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Agregar from './pages/Agregar'
import Listado from './pages/Listado'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Agregar/>}/>
        <Route path="/listado" element={<Listado/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App