// src/components/Header/MobileMenu.jsx
import React, { useState } from "react";
import { menuConfig } from "../../config/menuConfig";
import UpArrow from "../../assets/Up_arrow.png";
import DownArrow from "../../assets/Down_arrow.png";

export default function MobileMenu({ onNavigate }) {
  const [openMenus, setOpenMenus] = useState({});
  const INDENT_STEP = 8;
  const BASE_PADDING = 8;

  const toggleMenu = (menuKey, level) => {
    setOpenMenus((prev) => ({
      ...prev,
      [level]: prev[level] === menuKey ? null : menuKey,
    }));
  };

  const idFrom = (text) =>
    `submenu-${text?.toLowerCase().replace(/\s+/g, "-")}`;

  const renderLinks = (items, level = 1) => (
    <ul
      role="group"
      style={{ paddingLeft: BASE_PADDING + level * INDENT_STEP }}
      className="space-y-2 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#ee3124]/70 scrollbar-track-[#efefef]"
    >
      {items.map((item) => {
        const hasChildren =
          Array.isArray(item.children) && item.children.length > 0;
        const key = `${item.label}-${level}`;
        const sectionId = idFrom(key);

        return (
          <li key={key}>
            {/* Parent row: static styling only (no open-dependent styling) */}
            <div
              className="flex justify-between items-center cursor-pointer rounded-md"
              onClick={() => {
                if (hasChildren) toggleMenu(key, level);
              }}
              aria-controls={sectionId}
              aria-expanded={openMenus[level] === key}
            >
              {item.href ? (
                // Anchor only wraps the text (not full row). It stops propagation so clicking name navigates.
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate(e);
                  }}
                  className={`py-2 text-gray-600 hover:text-gray-900 ${
                    openMenus[level] === key ? "font-bold" : "font-normal"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={`py-2 text-gray-700 ${
                    openMenus[level] === key ? "font-bold" : "font-normal"
                  }`}
                >
                  {item.label}
                </span>
              )}

              {hasChildren && (
                <img
  src={openMenus[level] === key ? UpArrow : DownArrow}
  alt={openMenus[level] === key ? "Collapse" : "Expand"}
  className="w-4 h-4 ml-2 transition-transform duration-300"
/>

              )}
            </div>

            {hasChildren && (
              <div
                id={sectionId}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openMenus[level] === key
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {renderLinks(item.children, level + 1)}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <nav
      className="bg-white border-t border-gray-200 px-4 py-4 rounded-2xl shadow-lg max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#ee3124]/70 scrollbar-track-[#efefef] space-y-4"
      aria-label="Primary"
    >
      <div className="divide-y divide-gray-200">
        {menuConfig.mainMenus.map((menu) => {
          const hasChildren =
            Array.isArray(menu.children) && menu.children.length > 0;
          const key = `${menu.label}-root`;
          const sectionId = idFrom(key);

          return (
            <div key={key} className="py-2">
              {/* Root row: no open-dependent background; only the label becomes bold when open */}
              <div
                className="flex justify-between items-center cursor-pointer rounded-md"
                onClick={() => {
                  if (hasChildren) toggleMenu(key, 0);
                }}
                aria-controls={sectionId}
                aria-expanded={openMenus[0] === key}
              >
                {menu.href ? (
                  <a
                    href={menu.href}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(e);
                    }}
                    className={`py-2 text-gray-800 hover:text-gray-900 ${
                      openMenus[0] === key ? "font-bold" : "font-normal"
                    }`}
                  >
                    {menu.label}
                  </a>
                ) : (
                  <span
                    className={`py-2 text-gray-800 ${
                      openMenus[0] === key ? "font-bold" : "font-normal"
                    }`}
                  >
                    {menu.label}
                  </span>
                )}

                {hasChildren && (
                <img
  src={openMenus[0] === key ? UpArrow : DownArrow}
  alt={openMenus[0] === key ? "Collapse" : "Expand"}
  className="w-4 h-4 ml-2 transition-transform duration-300"
/>

                )}
              </div>

              {hasChildren && (
                <div
                  id={sectionId}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openMenus[0] === key
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {renderLinks(menu.children, 1)}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-around pt-4 border-t border-gray-200">
        {menuConfig.iconLinks.map((icon) => (
          <a
            key={icon.label}
            href={icon.href}
            onClick={onNavigate}
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
  );
}
