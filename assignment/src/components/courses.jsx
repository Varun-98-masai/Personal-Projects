import Card from "react-bootstrap/Card";
import "../styles/courses.css";

function Courses() {
  return (
    <div>
      <h1 className="h1">
        {" "}
        Our Courses
      </h1>
      <div
        className="card_div"
      >
        <Card style={{ width: "18rem" ,marginBottom:"10px"}}>
          <Card.Img
            variant="top"
            src="https://d3gmywgj71m21w.cloudfront.net/fa650d8c44ac967b4cb0dd890d21b67a"
          />
          <Card.Body>
            <Card.Title>Complete Python Course Tutorial</Card.Title>
            <Card.Text>No. of Videos: 241</Card.Text>
            <Card.Text>Course Time: 27.8 hours</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" ,marginBottom:"10px"}}>
          <Card.Img
            variant="top"
            src="https://d3gmywgj71m21w.cloudfront.net/498f10428c3b24c94e57a4bff1176c93"
          />
          <Card.Body>
            <Card.Title>Javascript(JS)</Card.Title>
            <Card.Text>No. of Videos: 36</Card.Text>
            <Card.Text>Course Time: 5.1 hours</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" ,marginBottom:"10px"}}>
          <Card.Img
            variant="top"
            src="https://d3gmywgj71m21w.cloudfront.net/bdc64b30d8b2992575b5aa5a3bc06c42"
          />
          <Card.Body>
            <Card.Title>Casacading Style Sheet (CSS)</Card.Title>
            <Card.Text>No. of Videos: 24</Card.Text>
            <Card.Text>Course Time: 3.0 hours</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" , marginBottom:"10px" }}>
          <Card.Img
            variant="top"
            src="https://d3gmywgj71m21w.cloudfront.net/728a2d3aab11afa24520305befc0f119"
          />
          <Card.Body>
            <Card.Title>Hyper Text Markup Language (HTML)</Card.Title>
            <Card.Text>No. of Videos: 21</Card.Text>
            <Card.Text>Course Time: 2.0 hours</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Courses;
