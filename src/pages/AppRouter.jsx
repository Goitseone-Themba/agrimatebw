import { Route, Routes } from 'react-router-dom'
import { Dashboard } from "./Dashboard"
import { InventoryManagement } from "./InventoryManagement"
import { AnimalTracking } from "./AnimalTracking"
import { CropMonitoring } from "./CropMonitoring"
import { Navigation } from "../components/Navigation"
import { Footer } from "../components/Footer"
import SideNav from '../components/SideNav'
import './CSS/AppRouter.css'
import { Settings } from './Settings'
import { UserProfile } from './UserProfile'
import { Settings } from './Settings'


export const AppRouter = () => {
  return (<div className='app-router'>
    {/* <Navigation /> */}
    <SideNav />
         <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/inventoryManagement' element={<InventoryManagement />} />
            <Route path='/animalTracking' element={<AnimalTracking />} />
            <Route path='/cropMonitoring' element={<CropMonitoring />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/userprofile' element={<UserProfile />} />
            <Route path='/settings' element={<Settings/>} />  
         </Routes>
    {/* <Footer /> */}
  </div>)
}
