import React from "react";
// import ContributionCalendar from './calender';
import HeroImage from "./carousel";
import "../styles/home.css";
import student from "../students.jpeg";
import pro from "../proffessional.webp";
import mobile from "../mobile.webp";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

import Courses from "./courses";
import Carousel2 from "./carousel2";
import "../styles/carousel2.css"
const Home = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <HeroImage />

      <div className="container">
        <div className="students">
          <img src={student} alt="" />
          <div>
            <p>Unlock your learning potential with CipherSchools</p>
            <h1>Best platform for the students</h1>
            <button>For Students</button>
          </div>
        </div>
        <div className="professionals">
          <img src={pro} alt="" />
          <div>
            <p>Empowering students to open their minds to utmost knowledge</p>
            <h1>Be the mentor you never had</h1>
            <button>For Creaters</button>
          </div>
        </div>
      </div>
       {/* <div  className="carousel-wrapper">
       <Carousel2>
        <div  className="container-1">
          <img src="https://ik.imagekit.io/cipherschools/CipherMentors/Rajan-Coding_Mentor.png" alt="" />
        </div>
        <div  className="container-1">
          <img src="https://ik.imagekit.io/cipherschools/CipherMentors/Sagar-Adobe.png" alt="" />
          </div>
        <div  className="container-1">Container 3</div>
        <div  className="container-1">Container 4</div>
        <div className="container-1">Container 5</div>
        <div className="container-1">Container 6</div>
        <div className="container-1">Container 7</div>
        <div className="container-1">Container 8</div>
      </Carousel2>
       </div> */}
      <Courses />

      <div className="container2">
        <div className="image">
          <img src={mobile} alt="" />
        </div>
        <div className="info">
          <h1>Join our community <br /> on <span style={{color:"#5865f2"}}> Discord</span> </h1>
          <p>Come together and make a difference! <br /> Connect and grow with our Discord community! <br />
          Join our community for an interactive learning experience!</p>
          <button style={{backgroundColor:"#5865f2",padding:"5px 20px", borderRadius:"12px",border:"none", color:"white"}}>Join Discord</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
