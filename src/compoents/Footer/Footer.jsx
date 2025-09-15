// src/components/Footer/Footer.jsx
import React from "react";
import { siteConfig, menuConfig } from "../../config/menuConfig";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-black mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Subscription */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-black">Subscribe</h4>
          <p className="text-sm mb-2 text-black">Get the latest updates and news.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md border border-black text-black focus:outline-none focus:ring-2 focus:ring-[#ee3124]"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-[#ee3124] hover:bg-[#ee3124]/90 text-white font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-black">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {menuConfig.mainMenus.map((menu) => (
              <li key={menu.label}>
                <a
                  href={menu.href}
                  className="text-black hover:text-[#ee3124] transition-colors"
                >
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-black">Contact Us</h4>
          <p className="text-sm text-black">123 Your Street, City, Country</p>
          <p className="text-sm text-black">Email: contact@yourcompany.com</p>
          <p className="text-sm text-black">Phone: +123 456 7890</p>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-black">Follow Us</h4>
          <div className="flex space-x-3">
            {siteConfig.iconLinks.map((icon) => (
              <a
                key={icon.label}
                href={icon.href}
                className="p-2 rounded-md bg-black hover:bg-[#ee3124] transition-colors"
                aria-label={icon.label}
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
        </div>

      </div>

      <div className="border-t border-black mt-8 py-4 text-center text-sm text-black">
        © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
      </div>
    </footer>
  );
}
