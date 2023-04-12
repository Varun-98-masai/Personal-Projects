import React, { useRef, useState } from "react";
import "../styles/main.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../download.jpg";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const ref = useRef();
  const [modal, setModal] = useState(false);
  const showNavbar = () => {
    ref.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          <h4>Profile Update</h4>
        </ModalHeader>
        <ModalBody>
          <div className="popup_form">
            <div>
              <img src={logo} alt="popup_cipher_logo" className="popup_cipher_logo" />
            </div>
            <div>
              <form>
                <Row>
                  <Col lg={12}>
                    <div>
                    <label htmlFor="usename">First Name:</label>
                    <input type="text" placeholder="Enter Your First Name" />
                    </div>
                   
                  </Col>
                  <Col lg={12}>
                    <div>
                    <label htmlFor="usename">Last Name:</label>
                    <input type="text" placeholder="Enter Your Last Name" />
                    </div>
                   
                  </Col>
                  <Col lg={12}>
                    <div>
                    <label htmlFor="usename">Email Address:</label>
                    <input type="text" placeholder="Enter Your Email Address" />
                    </div>
                   
                  </Col>
                  <Col lg={12}>
                    <div>
                    <label htmlFor="usename">Mobile Number:</label>
                    <input type="number" placeholder="Enter Your Mobile Number" />
                    </div>
                   
                  </Col>
                </Row>
              </form>
              <div style={{display: "flex", gap:"4px"}}>
                <button style={{color:"white", backgroundColor: "black", padding:"8px", border:"none", borderRadius:"4px"}}>Cancle</button>
                <button style={{color:"white", backgroundColor: "orange", padding:"8px", border:"none", borderRadius:"4px"}}>Save</button>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <div className="logo_div" onClick={() => setModal(true)}>
        <img src={logo} alt="cipher_logo" className="logo" />
        <h3>Cipher Schools</h3>
      </div>

       <nav ref={ref}>
        <Link to="/"> Home </Link>
        <Link to="/profile"> My Profile</Link>
        <a href="/#"> Live Reviews </a>
        <a href="/#"> Community </a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="explore_btn">Explore Courses</button>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
