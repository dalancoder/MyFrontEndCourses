import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar'
import MyFooter from '../components/MyFooter'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Interview from '../pages/Interview'
import NotFound from '../components/NotFound'


const AppRouter = () => {
    

  return (
   <BrowserRouter>
<Routes>
    <Route element={
        <>
            <MyNavbar  />
            <Outlet/>
            <MyFooter/>
        </>
    }>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/interview" element={<Interview />} />
    </Route>
    <Route path='*' element={<NotFound/>} />
</Routes>
    
   </BrowserRouter>
  )
}

export default AppRouter