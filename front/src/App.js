import { BrowserRouter, Routes, Route } from "react-router-dom";

//Admin
import AdminLayout from "./pages/admin/layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";

//Guest
import GuestLayout from "./pages/guest/layout/GuestLayout";

import Home from "./pages/guest/Home";
import AboutUs from "./pages/guest/AboutUs";
import ContactUs from "./pages/guest/ContactUs";
import NoPageFound from "./pages/NoPageFound";
import './App.css';

function App() {
  


  return (
    <BrowserRouter>
    <Routes>     
      <Route path="/dashboard" element={<AdminLayout />}>
        <Route exact index element={<Dashboard />} />
      </Route>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<Home />} />
        <Route exact path="about" element={<AboutUs />} />
        <Route exact path="contact" element={<ContactUs />} />
        <Route exact path="*" element={<NoPageFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


export default App;
