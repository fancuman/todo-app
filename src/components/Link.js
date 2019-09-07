import React from "react";

export default function Link({ active, onFilterClick, children }) {
  if (active) return <span>{children}</span>;
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onFilterClick();
      }}
    >
      {children}
    </a>
  );
}
