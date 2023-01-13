import { Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Day1Exercise1 from './Week1/Day1/Day1Exercises/Exercise1'
import Day1Exercise2 from './Week1/Day1/Day1Exercises/Exercise2'
import Box from '@mui/material/Box'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const inf = 9999999999999;

const Workout = () => {

    const navigate = useNavigate();

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
          <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title style={{display: 'flex', justifyContent: 'center'}}>Day 1</Card.Title>
                <br></br>
                <div className="text-center">
                <Button text-align="center" variant="primary" onClick={() => navigate("/day1")} >Go To Day 1</Button>
                </div>
                <br></br>
                <div className="text-center">
                <Button text-align="center" variant="primary">Mark Day 1 Complete</Button>
                </div>
                <br></br>
            </Card.Body>
          </Card>
          </div>

          </Carousel.Item>
          <Carousel.Item interval={inf}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title style={{display: 'flex', justifyContent: 'center'}}>Day 2</Card.Title>
                <br></br>
                <div className="text-center">
                <Button text-align="center" variant="primary" onClick={() => navigate("/day2")} >Go To Day 2</Button>
                </div>
                <br></br>
            </Card.Body>
          </Card>
          </div>

          </Carousel.Item>
       
        </Carousel>

        </div>
        
        
      );
    }
  
  export default Workout;