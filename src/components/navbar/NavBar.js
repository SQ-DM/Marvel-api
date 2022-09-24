import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="container-fluid">
      <div className="navbar bg-dark border border-info rounded">
        <div className="nav text-white">
          <strong className="text-danger">MARVEL</strong> information portal
        </div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Characters
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active " to="/comics">
              Comics
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
