// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu"; // will create next
import SearchBar from "./SearchBar";   // will create next
import { siteConfig } from "../../config/menuConfig";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const headerRef = useRef(null);

  // Close menu or search when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) {
        setMenuOpen(false);
        setShowSearch(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  // Toggle handlers
  const toggleMenu = () => setMenuOpen((v) => !v);
  const toggleSearch = () => setShowSearch((v) => !v);

  
  const handleNavigate = () => {
    setMenuOpen(false);
    setShowSearch(false);
    
  };

  return (
    <header
      ref={headerRef}
      className="w-full bg-white border-b border-gray-200 sticky top-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand: logo text + tagline */}
          <div className="flex items-center space-x-3">
            <a
              href="/"
              className="text-xl font-semibold tracking-tight text-gray-900"
              aria-label={`${siteConfig.companyName} - ${siteConfig.tagline}`}
            >
              <span>{siteConfig.companyName}</span>
            </a>
            <span className="hidden sm:inline-block text-sm text-gray-500">
              {siteConfig.tagline}
            </span>
          </div>

          {/* Desktop nav & icons (hidden on small screens) */}
          <nav className="hidden md:flex items-center space-x-4" aria-label="Primary">
            {/* Example: quick links (optional) */}
            {siteConfig.topLinks?.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={toggleSearch}
              className="p-2 rounded-md hover:bg-gray-100"
              aria-expanded={showSearch}
              aria-label="Open search"
            >
              🔍
            </button>

            {/* Action icons (example placeholders) */}
            <div className="flex items-center space-x-2 ml-2">
  {siteConfig.iconLinks?.map((icon) => (
    <a
      key={icon.label}
      href={icon.href}
      aria-label={icon.label}
      className="p-2 rounded-md hover:bg-gray-100"
    >
      <span className="sr-only">{icon.label}</span>
      {typeof icon.icon === "string" &&
      (icon.icon.endsWith(".svg") ||
        icon.icon.endsWith(".png") ||
        icon.icon.endsWith(".jpg") ||
        icon.icon.endsWith(".jpeg") ||
        icon.icon.endsWith(".webp")) ? (
        <img src={icon.icon} alt={icon.label} className="w-6 h-6" />
      ) : icon.icon ? (
        <span aria-hidden>{icon.icon}</span>
      ) : (
        <span aria-hidden>🔗</span>
      )}
    </a>
  ))}
</div>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleSearch}
              className="mr-2 p-2 rounded-md hover:bg-gray-100"
              aria-expanded={showSearch}
              aria-label="Open search"
            >
              🔍
            </button>

            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <div className="relative w-6 h-6">
             {/* Top bar */}
               <span
               className={`absolute left-0 top-1 block h-0.5 w-6 bg-current rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
    ></span>
    {/* Middle bar */}
    <span
      className={`absolute left-0 top-3 block h-0.5 w-6 bg-current rounded transition-all duration-300 ${
        menuOpen ? "opacity-0" : "opacity-100"
      }`}
    ></span>
    {/* Bottom bar */}
    <span
      className={`absolute left-0 top-5 block h-0.5 w-6 bg-current rounded transition-transform duration-300 ${
        menuOpen ? "-rotate-45 -translate-y-2" : ""
      }`}
    ></span>
  </div>
</button>

          </div>
        </div>
      </div>

      {/* Search bar (collapsible) */}
      <div className={`w-full bg-white border-t border-gray-100 ${showSearch ? "block" : "hidden"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <SearchBar onNavigate={handleNavigate} />
        </div>
      </div>

      {/* Mobile menu (drawer) */}
      <div
        id="mobile-menu"
        className={`md:hidden ${menuOpen ? "block" : "hidden"}`}
        aria-hidden={!menuOpen}
      >
        <MobileMenu onNavigate={handleNavigate} />
      </div>
    </header>
  );
}
