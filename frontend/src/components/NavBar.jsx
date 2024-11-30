import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react"
import "../styles/NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NSVC_Logo from "../assets/NSVC_Logo.png"



function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleResize = () => {
    if (window.innerWidth < 1080) {
      setIsMobile(true)
    } else {
      setIsOpen(false)
      setIsMobile(false)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
  })

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  }


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    };
   
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


    return (
      <div class="container">
        <div class="navbar">
          {!isMobile ? 
            <>
            <a class="logo-link" href="/">
            <img class="logo"type="image/png" src={NSVC_Logo}/>
            <h1 class="title">NSVC</h1>
            </a>
            <div class="links">
              <a href="/poles" class="poles">Poles</a>
              <a href="/memberships" class="memeberships">Memberships</a>
              <a href="/" class="home">Home</a>
              <a href="/staff" class="staff">Staff</a>
            </div>
            <a href="/login" class="login-link">Login</a>
            </>
            :
            <>
            <a href="/" class="logo-link" >
            <img class="logo"type="image/png" src={NSVC_Logo}/>
            <h1 class="title">NSVC</h1>

            </a>
            <div class="dropdown" ref={dropdownRef}>
            <button class="dropbtn" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
            {isOpen && (
              <div class="links">
                <a href="/login" class="login-link">Login</a>
                <a href="/" class="home">Home</a>
                <a href="/poles" class="poles">Poles</a>
                <a href="/staff" class="staff">Staff</a>
                <a href="/memberships" class="memeberships">Memberships</a>
                </div>
              )}
              </div>
              </>
              }
          </div>
        </div>
       
    )
}

export default NavBar
