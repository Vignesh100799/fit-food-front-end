import "./App.css";
import Login from "./components/User/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landingpage/LandingPage";
import 'bootstrap';
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import RegisterForm from "./components/User/info/Regis";

import Dashboard from "./components/Dashboard/Dashboard";
import Settings from "./components/Dashboard/Settings";
import Food from "./components/Food/Food";
import BmiCalculator from "./components/Dashboard/Bmi";
import Faq from "./components/Dashboard/Faq";
import Contact from "./components/Dashboard/Contact";
import HomeExercise from "./components/Exercise/HomeExercise";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/food-chart" element={<Food />} />
            <Route path="/bmi-calculator" element={<BmiCalculator />} />
            <Route path="/faq-section" element={<Faq />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/exercise" element={<HomeExercise />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
