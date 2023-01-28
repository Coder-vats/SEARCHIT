import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../img/log.png";
import "../search.css";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { API_KEY, HOST } from "../api";
import axios from "axios";
import { Show } from "./Show";

export const Search = (props) => {
  const { state } = useLocation();

  const [stat, setStat] = useState(state ? state : "");
  const [items, setItems] = useState([]);

  const navigate = useNavigate();
  function home() {
    navigate("/");
  }
  const options = {
    method: "GET",
    url: "https://google-web-search1.p.rapidapi.com/",
    params: { query: stat, limit: "20", related_keywords: "true" },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": HOST
    }
  };

  useEffect(() => {
    function ps() {
      if (state) {
        axios
          .request(options)
          .then((res) => {
            console.log(res);
            setItems(res.data.results);
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    }

    ps();
  }, []);

  function SearchIt(e) {
    e.preventDefault();
    axios
      .request(options)
      .then((res) => {
        console.log(res);
        setItems(res.data.results);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <>
      <div className="search">
        <div className="search-form">
          <div className="search-logo" onClick={home}>
            <img src={logo} alt="log" className="log" />
          </div>
          <div className="search-input">
            <form className="home-form" onSubmit={SearchIt}>
              <input
                type="text"
                className="home-input"
                value={stat}
                onChange={(e) => {
                  setStat(e.target.value);
                }}
              />
              <FaSearch className="search-icon" />
              <FaMicrophone className="mic" />
            </form>
          </div>
        </div>
      </div>
      {items.length ? <Show items={items} /> : null}
    </>
  );
};
