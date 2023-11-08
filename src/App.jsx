import React from 'react';
import { LandingPage } from "./pages/LandingPage";
import { Login } from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import { Signup } from './pages/Signup';
import "./App.css";
import { AppRouter } from './pages/AppRouter';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { About } from './pages/About';



function App() {
  return (
    <div className='app-space'>
          <AuthContextProvider>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/sign' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />

            <Route path='/appRouter/*' element={
              <ProtectedRoute>
                <AppRouter />
              </ProtectedRoute>
            } />
          </Routes>
          </AuthContextProvider>
    </div>
  );
}

export default App;
