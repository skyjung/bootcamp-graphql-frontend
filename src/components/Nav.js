import React from "react";

export default function Nav({ setMenuOpen, menuOpen }) {
  return (
    <nav>
      <div className="nav-wrapper">
        <button onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
      </div>
    </nav>
  );
}
