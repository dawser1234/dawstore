import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'; // Import the Image component from react-bootstrap
import img1 from './img1.jpg'; // Path to your image files
import img2 from './img2.jpg'; // Path to your image files
import img3 from './img3.jpg'
import './carrousel.css';

function Carrousel() {
  return (
    <div className='homme1'>
    <div className='home'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className='imagg' src={img1} alt="First slide" fluid /> {/* Use Image component for the images */}
        <Carousel.Caption>
          <h3></h3>
          <p>.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className='imagg' src={img2} alt="Second slide" fluid /> {/* Use Image component for the images */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className='imagg' src={img3} alt="Second slide" fluid /> {/* Use Image component for the images */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      {/* Add more Carousel.Item components for additional slides */}
    </Carousel>
    </div>
    </div>
  );
}

export default Carrousel;
