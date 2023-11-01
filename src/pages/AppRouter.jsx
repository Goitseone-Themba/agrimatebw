import { Route, Routes } from 'react-router-dom'
import { Dashboard } from "./Dashboard"
import { InventoryManagement } from "./InventoryManagement"
import { AnimalTracking } from "./AnimalTracking"
import { CropMonitoring } from "./CropMonitoring"
import { Navigation } from "../components/Navigation"
import { Footer } from "../components/Footer"

export const AppRouter = () => {
  return (<>
    <Navigation />
         <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/inventoryManagement' element={<InventoryManagement />} />
            <Route path='/animalTracking' element={<AnimalTracking />} />
            <Route path='/cropMonitoring' element={<CropMonitoring />} />
         </Routes>
         <Footer />
  </>)
}
