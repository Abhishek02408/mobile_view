// src/components/Header/SearchBar.jsx
import React, { useState, useEffect } from "react";
import { menuConfig } from "../../config/menuConfig";

// Utility: flatten menu items for search
function flattenMenu(items) {
  let flat = [];
  items.forEach((item) => {
    if (item.children) {
      flat = flat.concat(flattenMenu(item.children));
    } else {
      flat.push(item);
    }
  });
  return flat;
}

export default function SearchBar({ onNavigate }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const allLinks = flattenMenu(menuConfig.mainMenus);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = allLinks.filter((link) =>
      link.label.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query, allLinks]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search menu..."
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        aria-label="Search menu"
      />
      {results.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border border-gray-200 mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto z-50">
          {results.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => {
                  onNavigate();
                  setQuery("");
                }}
                className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
