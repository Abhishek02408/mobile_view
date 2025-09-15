// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { menuConfig } from "../../config/menuConfig";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (label) => {
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  const renderDropdown = (items) => {
    return (
      <ul className="absolute bg-white shadow-lg border border-gray-200 rounded-md mt-1 min-w-[200px] z-50">
        {items.map((item) => (
          <li key={item.label} className="relative group">
            {item.children ? (
              <div className="relative">
                <a
                  href={item.href || "#"}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium"
                >
                  {item.label} →
                </a>
                {/* Nested dropdown */}
                <div className="absolute top-0 left-full hidden group-hover:block">
                  {renderDropdown(item.children)}
                </div>
              </div>
            ) : (
              <a
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav
      className="hidden md:flex justify-center bg-white border-b border-gray-200"
      aria-label="Primary Navigation"
    >
      <ul className="flex space-x-6 px-4 py-2">
        {menuConfig.mainMenus.map((menu) => (
          <li
            key={menu.label}
            className="relative"
            onMouseEnter={() => handleMouseEnter(menu.label)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={menu.href }
              className="text-gray-800 font-semibold hover:text-gray-900 px-2 py-1"
            >
              {menu.label}
            </a>

            {menu.children && openMenu === menu.label && (
              <div className="absolute top-full left-0">{renderDropdown(menu.children)}</div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
