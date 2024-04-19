import React from "react";
import "../common/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>This is Header Part</h1>
      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about-us"}>About</Link></li>
          <li><Link to={"/course"}>Course</Link></li>
        </ul>
      </nav>
    </div>
  );
}
