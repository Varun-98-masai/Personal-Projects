import React, { useRef } from 'react';
import "../styles/main.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Cipher_logo.png"

const Navbar = () => {
    const ref = useRef();
    
    const showNavbar = () =>{
        ref.current.classList.toggle("responsive_nav")
    }
   
  return (
    <header>
        <img src={logo} alt="cipher_logo" className='logo' />
            <nav ref={ref}>
            <a href="/#"> Home </a>
            <a href="/#"> Creater Access </a>
            <a href="/#"> Live Reviews </a>
            <a href="/#"> Community </a>
           
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
        <FaTimes />
        </button>
        </nav>
        <button className='explore_btn'>
                Explore Courses
        </button>
       

        <button className='nav-btn' onClick={showNavbar}>  
        <FaBars />
        </button>
    </header>
  )
}

export default Navbar;