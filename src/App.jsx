import React from "react"
import logo from "./assets/logo.svg"
import imgHero from "./assets/desktop/image-hero.jpg"
import imgInteractive from "./assets/desktop/image-interactive.jpg"
import earthImg from "./assets/desktop/image-deep-earth.jpg"
import arcadeImg from "./assets/desktop/image-night-arcade.jpg"
import soccerImg from "./assets/desktop/image-soccer-team.jpg"
import gridImg from "./assets/desktop/image-grid.jpg"
import aboveImg from "./assets/desktop/image-from-above.jpg"
import borealisImg from "./assets/desktop/image-pocket-borealis.jpg"
import curiosityImg from "./assets/desktop/image-curiosity.jpg"
import fisheyeImg from "./assets/desktop/image-fisheye.jpg"

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
      <div className="content-2">
        <div className="content-2-info">
          <h2 className="content-2-title">OUR CREATIONS</h2>
          <button className="see-btn">SEE ALL</button>
        </div>
        <div className="content-2-imgs-1">
          <div className="content-2-img">
            <img src={earthImg} />
            <h3 className="img-title"><span>DEEP</span> EARTH</h3>
          </div>
          <div className="content-2-img">
            <img src={arcadeImg} />
            <h3 className="img-title"><span>NIGHT</span> ARCADE</h3>
          </div>
          <div className="content-2-img">
            <img src={soccerImg} />
            <h3 className="img-title"><span>SOCCER</span> TEAM VR</h3>
          </div>
          <div className="content-2-img">
            <img src={gridImg} />
            <h3 className="img-title"><span>THE</span> GRID</h3>
          </div>
        </div>
        <div className="content-2-imgs-2">
          <div className="content-2-img">
            <img src={aboveImg} />
            <h3 className="img-title"><span>FROM UP</span> ABOVE VR</h3>
          </div>
          <div className="content-2-img">
            <img src={borealisImg} />
            <h3 className="img-title"><span>POCKET</span> BOREALIS</h3>
          </div>
          <div className="content-2-img">
            <img src={curiosityImg} />
            <h3 className="img-title"><span>THE</span> CURIOSITY</h3>
          </div>
          <div className="content-2-img">
            <img src={fisheyeImg} />
            <h3 className="img-title"><span>MAKE IT</span> FISHEYE</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
