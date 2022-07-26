import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

const NavBar = ({ user }) => {
  return (
    <ul className="navMain">
      <li className="navTitle"> Vidly </li>
      <li className="navLink">
        <NavLink
          to="/movies"
          style={{ color: "black" }}
          activeStyle={{
            color: "#A19E9E",
          }}
        >
          Movies
        </NavLink>
      </li>
      <li className="navLink">
        <NavLink
          to="/customers"
          style={{ color: "black" }}
          activeStyle={{
            color: "#A19E9E",
          }}
        >
          Customers
        </NavLink>
      </li>
      <li className="navLink">
        <NavLink
          to="/rentals"
          style={{ color: "black" }}
          activeStyle={{
            color: "#A19E9E",
          }}
        >
          Rentals
        </NavLink>
      </li>
      {!user && (
        <NavLink to="/login" className="nav-item nav-link">
          Login
        </NavLink>
      )}
      <li className="navLink">
        <NavLink
          to="/register"
          style={{ color: "black" }}
          activeStyle={{
            color: "#A19E9E",
          }}
        >
          {" "}
          Register{" "}
        </NavLink>{" "}
      </li>
    </ul>
  );
};

export default NavBar;
