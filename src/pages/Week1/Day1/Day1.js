import { Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Day1Exercise1 from './Day1Exercises/Exercise1'
import Day1Exercise2 from './Day1Exercises/Exercise2'
import Box from '@mui/material/Box'

const inf = 9999999999999;

const Day1 = () => {
    return (
        
        <div>
            <br></br>
            <Row>
                <Col>Week 1</Col>
            </Row>
            <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '1px',
        }}
      />
   
      

        <Carousel 
        style={{
        display: "flex",
        }} variant="dark">
            
          <Carousel.Item interval={inf}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Day1Exercise1 />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={inf}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Day1Exercise2/>
            </div>
          </Carousel.Item>
       
        </Carousel>

        </div>
        
        
      );
    }
  
  export default Day1;