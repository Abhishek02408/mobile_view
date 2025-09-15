// src/pages/ServicesPage.jsx
import React from "react";
import { menuConfig } from "../config/menuConfig";

export default function ServicesPage() {
  // Find Services menu item
  const servicesMenu = menuConfig.mainMenus.find(
    (menu) => menu.label === "Services"
  );

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Services
        </h1>
        <p className="text-gray-600 mb-8">
          Explore the services we offer. Click any service to learn more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesMenu ? (
            <a
              href={servicesMenu.href}
              className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{servicesMenu.label}</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut.
              </p>
            </a>
          ) : (
            <p className="text-gray-500">No services available.</p>
          )}
        </div>
      </div>
    </main>
  );
}
