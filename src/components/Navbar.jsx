import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
       <img
  src="/images/Designer.png"
  alt="GastroMonde"
  className="logo-img"
/>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/countries">Pays</Link>
        </li>
        <li>
          <Link to="/recipes">Recettes</Link>
        </li>
        <NavLink to="/discover">Découvrir</NavLink>

        <li>
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </nav>
  );
}
