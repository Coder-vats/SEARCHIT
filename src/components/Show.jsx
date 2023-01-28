import React from "react";
import "../show.css";

export const Show = ({ items }) => {
  function showit(item) {
    return (
      <div className="showit">
        <div className="show-link">
          <a href={item.url}>{item.url}</a>
        </div>
        <div className="item-link">
          <a href={item.url}>{item.title}</a>
        </div>
        <div className="show-desc">
          <p>{item.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="show">
      <div className="show-info">About 1070000 results (0.47 seconds)</div>
      <div className="items">{items.map(showit)}</div>
    </div>
  );
};
