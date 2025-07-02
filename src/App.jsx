import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'; 
import About from './pages/About'; 
import Help from './pages/Help';
import Navi from './Components/Navi';


const App = () => {
  return (
  <>
  <Navi/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/help' element={<Help/>} />
  </Routes>

  </>
  )
}

export default App