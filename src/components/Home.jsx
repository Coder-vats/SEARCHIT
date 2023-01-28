import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/log.png";
import "../home.css";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";

export default function Home(props) {
  const [state, setState] = useState("");

  const navigate = useNavigate();

  function searchIt() {
    navigate("/search", { state: state });
  }

  return (
    <div className="home">
      <div className="home-container">
        <div className="logo">
          <img className="img-logo" src={logo} alt="logo" />
        </div>
        <form className="home-form" onSubmit={searchIt}>
          <input
            type="text"
            className="home-input"
            onChange={(e) => {
              setState(e.target.value);
            }}
            value={state}
          />
          <div className="home-group">
            <button type="submit" className="home-button">
              Search
            </button>
          </div>
          <FaSearch className="search-icon" />
          <FaMicrophone className="mic" />
        </form>
      </div>
    </div>
  );
}
