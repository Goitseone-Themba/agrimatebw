import React from 'react'
import { LandingPage } from "./pages/LandingPage"
import { Dashboard } from './pages/Dashboard'
import { AnimalTracking } from './pages/AnimalTracking'
import { CropMonitoring } from './pages/CropMonitoring'
import { InventoryManagement } from './pages/InventoryManagement'
import { Login } from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'

function App() {
  return (
    <div>
      <h1 className='app-label'>Firebase Auth & context</h1>
         <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/sign' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/inventoryManagement' element={<InventoryManagement />} />
            <Route path='/animalTracking' element={<AnimalTracking />} />
            <Route path='cropMonitoring' element={<CropMonitoring />} />
         </Routes>
    </div>
  )
}

export default App