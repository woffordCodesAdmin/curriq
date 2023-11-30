import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>Crypto Prices</div>
      </Link>

      <Link to="/currencies">
        <div className="spitta">CURRENCIES</div>
      </Link>
    </div>
  );
}

export default Nav;
