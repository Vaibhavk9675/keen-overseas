import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Countries from "../pages/Countries";
import Contact from "../pages/Contact";

import MainLayout from "../layout/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="countries" element={<Countries />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;