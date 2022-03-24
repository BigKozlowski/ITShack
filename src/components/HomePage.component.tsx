import React from "react";

import "./HomePage.styles.scss";

const HomePage = () => {
    return  <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h3 className="title">DESKTOP</h3>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h3 className="title">MOBILE</h3>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h3 className="title">CPU</h3>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h3 className="title">GPU</h3>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h3 className="title">PERIPHERALS</h3>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
}

export default HomePage;