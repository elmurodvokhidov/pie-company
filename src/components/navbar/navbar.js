import React from "react";
import style from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className={style.container}>
        <div className={style.nav_box}>
          <NavLink to="/">Yummy Pies</NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
