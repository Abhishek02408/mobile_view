// src/pages/SolutionsPage.jsx
import React from "react";
import { menuConfig } from "../config/menuConfig";

export default function SolutionsPage() {
  const solutionsMenu = menuConfig.mainMenus.find(
    (menu) => menu.label === "Solutions"
  );

  const functionalityItems = solutionsMenu?.children?.find(
    (c) => c.label === "Functionality"
  )?.children;

  const productItems = solutionsMenu?.children?.find(
    (c) => c.label === "Product"
  )?.children;

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Solutions</h1>

        {/* Functionality Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Functionality</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {functionalityItems?.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Product Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Product</h2>
          <div className="space-y-8">
            {productItems?.map((product, pIndex) => (
              <div key={pIndex}>
                <h3 className="text-xl font-semibold mb-2">{product.label}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.children?.map((subpoint, sIndex) => (
                    <a
                      key={sIndex}
                      href={subpoint.href}
                      className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
                    >
                      <h4 className="font-medium mb-1">{subpoint.label}</h4>
                      <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
