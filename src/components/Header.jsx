import React from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Movie" className="logo-img" />
        </Link>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="movies">Movie List</NavLink>
          </li>
        </ul>
      </div>
      <nav>
        <ul>
          <li>
            <Link>Login</Link>
          </li>
          <li>
            <Link>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
