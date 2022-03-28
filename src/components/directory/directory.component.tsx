import React, { useState } from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = () => {
  const [sections, setSections] = useState([
    {
      title: "CPU",
      imageUrl: "https://i.ibb.co/RQXQHFY/cpu.jpg",
      id: 1,
      linkUrl: "shop/cpu",
    },
    {
      title: "GPU",
      imageUrl: "https://i.ibb.co/rcHGc3b/gpu.jpg",
      id: 2,
      linkUrl: "shop/gpu",
    },
    {
      title: "Mobile",
      imageUrl: "https://i.ibb.co/N7WT8q1/mobile.jpg",
      id: 3,
      linkUrl: "shop/mobile",
    },
    {
      title: "Desktop",
      imageUrl: "https://i.ibb.co/VWJM2PV/desktop.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/desktop",
    },
    {
      title: "Peripherals",
      imageUrl: "https://i.ibb.co/ZJspDjm/peripherals.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/peripherals",
    },
  ]);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => {
        return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />;
      })}
    </div>
  );
};

export default Directory;
