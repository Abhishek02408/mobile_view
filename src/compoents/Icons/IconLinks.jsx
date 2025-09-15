// src/components/Icons/IconLinks.jsx
import React from "react";

export default function IconLinks({ icons, onClick }) {
  return (
    <div className="flex space-x-3">
      {icons.map((icon) => (
        <a
          key={icon.label}
          href={icon.href}
          onClick={onClick}
          aria-label={icon.label}
          className="p-2 rounded-md hover:bg-gray-100 text-gray-800 flex items-center justify-center"
        >
          <span className="sr-only">{icon.label}</span>
          {icon.icon?.endsWith('.svg') ? (
            <img 
              src={icon.icon} 
              alt=""
              className="w-6 h-6"
              aria-hidden="true"
            />
          ) : (
            <span aria-hidden className="text-2xl">{icon.icon || "🔗"}</span>
          )}
        </a>
      ))}
    </div>
  );
}
