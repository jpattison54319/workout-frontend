import { Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Box from '@mui/material/Box'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const inf = 9999999999999;

const Week1Carousel = () => {

    const navigate = useNavigate();

    return (
        <div>
            <br></br>
            <Row>
                <Col>Week 5</Col>
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
                <Button text-align="center" variant="primary" onClick={() => navigate("/w1d1")} >Go To Day 1</Button>
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
                <Button text-align="center" variant="primary" onClick={() => navigate("/w1d2")} >Go To Day 2</Button>
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
                <Card.Title style={{display: 'flex', justifyContent: 'center'}}>Rest Day</Card.Title>
                <br></br>
            </Card.Body>
          </Card>
          </div>
          </Carousel.Item>

          <Carousel.Item interval={inf}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title style={{display: 'flex', justifyContent: 'center'}}>Day 4</Card.Title>
                <br></br>
                <div className="text-center">
                <Button text-align="center" variant="primary" onClick={() => navigate("/w1d4")} >Go To Day 4</Button>
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
                <Card.Title style={{display: 'flex', justifyContent: 'center'}}>Day 5</Card.Title>
                <br></br>
                <div className="text-center">
                <Button text-align="center" variant="primary" onClick={() => navigate("/w1d5")} >Go To Day 5</Button>
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
                <Card.Title style={{display: 'flex', justifyContent: 'center'}}>Day 6</Card.Title>
                <br></br>
                <div className="text-center">
                <Button text-align="center" variant="primary" onClick={() => navigate("/w1d6")} >Go To Day 6</Button>
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
                <Card.Title style={{display: 'flex', justifyContent: 'center'}}>Day 7</Card.Title>
                <br></br>
                <div className="text-center">
                <Button text-align="center" variant="primary" onClick={() => navigate("/w1d7")} >Go To Day 7</Button>
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
  
  export default Week1Carousel;