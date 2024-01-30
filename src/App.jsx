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
import facebookLogo from "./assets/icon-facebook.svg"
import twitterLogo from "./assets/icon-twitter.svg"
import pinterestLogo from "./assets/icon-pinterest.svg"
import instagramLogo from "./assets/icon-instagram.svg"

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
              <li className="menu-item"><a href="">A<span>bou</span>t</a></li>
              <li className="menu-item"><a href="">Ca<span>ree</span>rs</a></li>
              <li className="menu-item"><a href="">E<span>ven</span>ts</a></li>
              <li className="menu-item"><a href="">Pr<span>odu</span>ct</a></li>
              <li className="menu-item"><a href="">Su<span className="text-under">ppo</span>rt</a></li>
            </ul>
          </div>
        </nav>
        <div className="header-info">
            <h1 className="header-text">
              <span className="text-block">IMMERSIVE</span>
              <span className="text-block">EXPERIENCES</span>
              <span className="text-block">THAT DELIVER</span>
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
            <img className="img-single" src={earthImg} />
            <h3 className="img-title"><span className="text-block">DEEP</span> EARTH</h3>
          </div>
          <div className="content-2-img">
            <img className="img-single" src={arcadeImg} />
            <h3 className="img-title"><span className="text-block">NIGHT</span> ARCADE</h3>
          </div>
          <div className="content-2-img">
            <img className="img-single" src={soccerImg} />
            <h3 className="img-title"><span className="text-block">SOCCER</span> TEAM VR</h3>
          </div>
          <div className="content-2-img">
            <img className="img-single" src={gridImg} />
            <h3 className="img-title"><span className="text-block">THE</span> GRID</h3>
          </div>
        </div>
        <div className="content-2-imgs-2">
          <div className="content-2-img">
            <img className="img-single" src={aboveImg} />
            <h3 className="img-title"><span className="text-block">FROM UP</span> ABOVE VR</h3>
          </div>
          <div className="content-2-img">
            <img className="img-single" src={borealisImg} />
            <h3 className="img-title"><span className="text-block">POCKET</span> BOREALIS</h3>
          </div>
          <div className="content-2-img">
            <img className="img-single" src={curiosityImg} />
            <h3 className="img-title"><span className="text-block">THE</span> CURIOSITY</h3>
          </div>
          <div className="content-2-img">
            <img className="img-single" src={fisheyeImg} />
            <h3 className="img-title"><span className="text-block">MAKE IT</span> FISHEYE</h3>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-logos">
          <img className="footer-logo" src={logo} />
          <div className="social-logos">
            <img className="logo-single" src={facebookLogo} />
            <img className="logo-single" src={twitterLogo} />
            <img className="logo-single" src={pinterestLogo} />
            <img className="logo-single" src={instagramLogo} />
          </div>
        </div>
        <div className="footer-nav">
          <p className="footer-menu-item"><a href="">About</a></p>
          <p className="footer-menu-item"><a href="">Careers</a></p>
          <p className="footer-menu-item"><a href=""> Events</a></p>
          <p className="footer-menu-item"><a href="">Products</a></p>
          <p className="footer-menu-item"><a href="">Support</a></p>
          <div className="copyright">
            <p className="copyright-text">© 2021 Loopstudios. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  )
}

export default App
