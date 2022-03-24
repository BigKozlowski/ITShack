import React from "react";

import "./menu-item.styles.scss"

const MenuItem = ({ title, imageUrl, size }: menuItem) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h3 className="title">{title.toUpperCase()}</h3>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;