import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import cimg1 from '../src/New folder/cimg1.jpg';
import cimg2 from '../src/New folder/cimg2.avif';
import cimg3 from '../src/New folder/cimg3.avif';
import Container from 'react-bootstrap/Container';

const Slider = () => {
  return (
    <div>


<Container fluid>
  
<Carousel className='car'>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75" 
          src={cimg1}
          alt="First slide" id='cimg'
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src={cimg2}
          alt="Second slide" id='cimg'
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src={cimg3}
          alt="Third slide" id='cimg'
        />
        
      </Carousel.Item>
    </Carousel>
 


</Container>
    </div>
  )
}

export default Slider