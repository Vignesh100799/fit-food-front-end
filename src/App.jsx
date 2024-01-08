
import './App.css'
import Login from './components/User/Login'

import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/Landingpage/LandingPage'
import Dashboard from './components/Home/Dashboard'
import 'bootstrap' 
import ForgotPassword from './components/User/ForgotPassword'
import ResetPassword from './components/User/ResetPassword'
import RegisterForm from './components/User/info/Regis'


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/register' element={ <RegisterForm/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/reset-password' element={<ResetPassword/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
