import React from "react"
import logo from "./assets/logo.svg"
import imgHero from "./assets/desktop/image-hero.jpg"
import imgInteractive from "./assets/desktop/image-interactive.jpg"

function App() {

  return (
    <div className="container">
      <div className="header">
        <nav className="nav-section">
          <div className="logo-div">
            <img src={logo} />
          </div>
          <div className="navigation">
            <input type="checkbox" className="toggle-menu"/>
            <div className="hamburger"></div>
            <ul className="menu">
              <li className="menu-item"><a href="">About</a></li>
              <li className="menu-item"><a href="">Careers</a></li>
              <li className="menu-item"><a href="">Events</a></li>
              <li className="menu-item"><a href="">Product</a></li>
              <li className="menu-item"><a href="">Support</a></li>
            </ul>
          </div>
        </nav>
        <div className="header-info">
            <h1 className="header-text">
              <span>IMMERSIVE</span>
              <span>EXPERIENCES</span>
              <span>THAT DELIVER</span>
            </h1>
        </div>
        <img className="hero-background" src={imgHero} />
      </div>
      <div className="content-1">
        <img className="img-interactive" src={imgInteractive} />
        <div className="content-1-info">
          <h2 className="content-1-title">THE LEADER IN INTERACTIVE VR</h2>
          <p className="content-1-text">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
      </div>
    </div>
  )
}

export default App
