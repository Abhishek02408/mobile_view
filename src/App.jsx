// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./compoents/Header/Header.jsx";
import Navbar from "./compoents/Navbar/Navbar.jsx";
import Footer from "./compoents/Footer/Footer.jsx";

import HomePage from "./pages/HomePage.jsx";
import IndustryPage from "./pages/IndustryPage.jsx";
import NewsroomPage from "./pages/NewsroomPage.jsx";
import SolutionsPage from "./pages/SolutionsPage.jsx";
import ServicesPage from "./pages/ServicePafe.jsx";
import OtherPage from "./pages/OtherPagse.jsx";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
       
        <Header
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          closeMobileMenu={closeMobileMenu}
        />

       
        <Navbar />

       
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="https://addverb.com/industry/" element={<IndustryPage />} />
            
            <Route path="/solutions/*" element={<SolutionsPage />} />

            <Route path="/newsroom/page-:id" element={<NewsroomPage />} />

            <Route path="/service/page-:id" element= {<ServicesPage/>}/>
            <Route path="/other/*" element={<OtherPage />} />
            {/* Fallback route */}
            <Route
              path="*"
              element={
                <div className="text-center py-20 text-gray-600">
                  Page Not Found
                </div>
              }
            />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
