import Carousel from 'react-bootstrap/Carousel';
import "../styles/carousel.css";

function HeroImage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="https://d3gmywgj71m21w.cloudfront.net/c40e13a7b0b0043a277b828678574e8b"
          alt="First slide"
         
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="https://d3gmywgj71m21w.cloudfront.net/d21a8b2d932adce3bbe79230d5bb92f3"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="https://d3gmywgj71m21w.cloudfront.net/659979c0b830aa98b05712cd6919a3bc"
          alt="Third slide"
        
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroImage;