// src/pages/NewsroomPage.jsx
import React from "react";
import { menuConfig } from "../config/menuConfig";

export default function NewsroomPage() {
  // Find Newsroom menu items
  const newsroomMenu = menuConfig.mainMenus.find(
    (menu) => menu.label === "Newsroom"
  );

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Newsroom</h1>
        <p className="text-gray-600 mb-8">
          Stay updated with the latest news and announcements.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsroomMenu?.children?.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{item.label}</h2>
              <p className="text-gray-600">
                Thank you for reading....
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
