import React from "react"
import imgHero from "./assets/desktop/image-hero.jpg"
import logo from "./assets/logo.svg"

function App() {

  return (
    <div className="container">
      <div className="header">
        <nav className="nav-section">
          <div className="logo-div">
            <img src={logo} />
          </div>
        </nav>
        <img className="hero-background" src={imgHero} />
      </div>
    </div>
  )
}

export default App
