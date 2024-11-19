import { useNavigate } from "react-router-dom";

import "../styles/NavBar.css"

function NavBar() {


    return (
       <div class="container">
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
       <div class="navbar">
          <h1 class="title">NSVC</h1>
          <div class="links">
            <a href="/" class="poles">Home</a>
            <a href="/poles" class="poles">Poles</a>
            <a href="/about" class="about">About</a>
            <a href="/contact" class="contact">Contact</a>
          </div>
          <a href="/login" class="login-link">Login/Register</a>
        </div>
      </div>
    )
}

export default NavBar
