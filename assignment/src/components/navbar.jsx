import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../styles/main.css"

const Navbar = () => {
    const ref = useRef();

    const showNavbar = () =>{
         ref.current.classList.toggle("responsive_nav");
    }
  return (
    <header>
        <h3>Logo</h3>
        <nav ref={ref}>
            <a href="/#"> home </a>
            <a href="/#"> About </a>
            <a href="/#"> Contact </a>
            <a href="/#"> Details </a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
  )
}

export default Navbar;