import React from 'react'
// import ContributionCalendar from './calender';
import HeroImage from './carousel';
import "../styles/home.css";
import student from "../students.jpeg"
import pro from "../proffessional.webp"
// import Courses from './courses';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const coursesArr = [
  {
      id:1,
      img: "https://d3gmywgj71m21w.cloudfront.net/fa650d8c44ac967b4cb0dd890d21b67a",
      title: "Complete Python Course Tutorial",
      videos: "No. of Videos: 241",
      hours: "Course Time: 27.8 hours",
  },
  {
      id:2,
      img: "https://d3gmywgj71m21w.cloudfront.net/fa650d8c44ac967b4cb0dd890d21b67a",
      title: "Complete Python Course Tutorial",
      videos: "No. of Videos: 241",
      hours: "Course Time: 27.8 hours",
  }
  ]
const Home = () => {


  return (
    <div style={{marginBottom:"50px"}}>
      <HeroImage/>
      
      <div className='container'>
        <div className='students'>
          <img src={student} alt="" />
          <div>
          <p>Unlock your learning potential with CipherSchools</p>
          <h1>Best platform for the students</h1>
          <button>For Students</button>
          </div>
        
        </div>
        <div className='professionals'>
        <img src={pro} alt="" />
          <div>
          <p>Empowering students to open their minds to utmost knowledge</p>
          <h1>Be the mentor you never had</h1>
          <button>For Creaters</button>
          </div>
        </div>
      </div>
      <div>
        <h1 style={{marginLeft:"20px"}}> Our Courses</h1>
      <div style={{marginTop:"20px",padding:"30px",display:"flex",justifyContent:"space-between"}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://d3gmywgj71m21w.cloudfront.net/fa650d8c44ac967b4cb0dd890d21b67a" />
      <Card.Body>
        <Card.Title>Complete Python Course Tutorial</Card.Title>
        <Card.Text>
        No. of Videos: 241
        </Card.Text>
        <Card.Text>
        Course Time: 27.8 hours
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://d3gmywgj71m21w.cloudfront.net/498f10428c3b24c94e57a4bff1176c93" />
      <Card.Body>
        <Card.Title>Javascript(JS)</Card.Title>
        <Card.Text>
        No. of Videos: 36
        </Card.Text>
        <Card.Text>
        Course Time: 5.1 hours
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://d3gmywgj71m21w.cloudfront.net/bdc64b30d8b2992575b5aa5a3bc06c42" />
      <Card.Body>
        <Card.Title>Casacading Style Sheet (CSS)</Card.Title>
        <Card.Text>
        No. of Videos: 24
        </Card.Text>
        <Card.Text>
        Course Time: 3.0 hours
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://d3gmywgj71m21w.cloudfront.net/728a2d3aab11afa24520305befc0f119" />
      <Card.Body>
        <Card.Title>Hyper Text Markup Language (HTML)</Card.Title>
        <Card.Text>
        No. of Videos: 21
        </Card.Text>
        <Card.Text>
        Course Time: 2.0 hours
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      </div>
    </div>
  )
}

export default Home