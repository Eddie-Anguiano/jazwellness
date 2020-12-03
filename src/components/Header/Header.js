import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header wrapper">
      <Link to="/" className="Header-logo">
        JazWellness.com
      </Link>
      <nav className="Header-nav">Contact</nav>
    </div>
  );
}
