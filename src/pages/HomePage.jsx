// src/pages/HomePage.jsx
import React from "react";
import banner from "../assets/banner.jpeg";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Banner Hero section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0">
          <img
  src={banner}
  alt="Addverb Banner"
  className="w-full h-full object-cover"
/>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Welcome to Addverb
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Warehouse Automation that delivers value! Innovating the future with smart solutions and products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
              <a
                href="/solutions/functionality/"
                className="inline-block px-8 py-4 bg-[#ee3124] border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Our Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder content section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">Feature {i + 1}</h2>
              <p className="text-gray-600">
                Add features of your choice
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
