import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react"
import "../styles/NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';




function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
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
      <>
      {!isMobile ? 
        <div class="container">
          <div class="navbar">
            <a href="/"><h1 class="title">NSVC</h1></a>
            <div class="links">
              <a href="/" class="poles">Home</a>
              <a href="/poles" class="poles">Poles</a>
              <a href="/about" class="about">About</a>
              <a href="/contact" class="contact">Contact</a>
            </div>
            <a href="/login" class="login-link">Login/Register</a>
          </div>
        </div>
        :
        <div class="container">
          <div class="navbar">
            <a href="/"><h1 class="title">NSVC</h1></a>
            <div class="dropdown" ref={dropdownRef}>
            <button class="dropbtn" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
            {isOpen && (
              <div class="links">
              <a href="/login" class="login-link">Login/Register</a>
              <a href="/" class="poles">Home</a>
              <a href="/poles" class="poles">Poles</a>
              <a href="/about" class="about">About</a>
              </div>
                )}
            </div>
          </div>
        </div>
      }
      </>
       
    )
}

export default NavBar
