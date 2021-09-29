import React from "react"
import logo from "../logo.png"

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container">
            <a class="navbar-brand" href="#"><img className="logo"src={logo} alt="logo..." /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About me</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">How I Work</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    )
}

export default Navbar
