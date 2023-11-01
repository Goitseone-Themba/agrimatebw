import React from 'react'
import { LandingPage } from "./pages/LandingPage"
import { Dashboard } from './pages/Dashboard'
import { AnimalTracking } from './pages/AnimalTracking'
import { CropMonitoring } from './pages/CropMonitoring'
import { InventoryManagement } from './pages/InventoryManagement'
import { Login } from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import "./App.css"
import { AppRouter } from './pages/AppRouter'


function App() {
  return (
    <div className='app-space'>
          <Routes>
          <Route path='/' element={<LandingPage />} />
            <Route path='/sign' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/appRouter/*' element={<AppRouter />} />
          </Routes>
    </div>
  )
}

export default App