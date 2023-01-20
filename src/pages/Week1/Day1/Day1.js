import { Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import W1D1E1 from './Day1Exercises/Exercise1'
import W1D1E2 from './Day1Exercises/Exercise2'
import W1D1E3 from './Day1Exercises/Exercise3'
import W1D1E4 from './Day1Exercises/Exercise4'
import W1D1E5 from './Day1Exercises/Exercise5'

const inf = 9999999999999;

const Week1Day1 = () => {
let data = 5;

    return (
   <div>
      

        <Carousel 
        style={{
        display: "flex",
        }} variant="dark">
            
          <Carousel.Item interval={inf}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <W1D1E1 name="butt"/>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={inf}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <W1D1E2/>
            </div>
          </Carousel.Item>
       
          <Carousel.Item interval={inf}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <W1D1E3/>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={inf}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <W1D1E4/>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={inf}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <W1D1E5/>
            </div>
          </Carousel.Item>

        </Carousel>

        </div>
        
        
      );
    }
  
  export default Week1Day1;