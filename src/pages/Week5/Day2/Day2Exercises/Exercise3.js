import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Box from '@mui/material/Box';

const Exercise1 = () => {
    return (
        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Subtitle>Exercise 3 of 5</Card.Subtitle>
            <Card.Title>Seated Leg Curl</Card.Title>
            <Container>
            <Row>
                <Col style={{border: '.5px solid black'}}>
                <h6>Equipment</h6>
                <p>Seated Leg Curl Machine</p>
                </Col>
                <Col style={{border: '.5px solid black'}}>
                <h6>Sets</h6>
                <p>3</p>
                </Col>
            </Row>
            <Row>
                <Col style={{border: '.5px solid black'}}>
                <h6>Reps</h6>
                <p>10-12</p>
                </Col>
                <Col style={{border: '.5px solid black'}}>
                <h6>Rest</h6>
                <p>3-5 minutes</p>
                </Col>
            </Row>
            </Container>
            <br></br>
            <div className="text-center">
            <Button variant="primary">Mark Completed</Button>
            </div>
            <br></br>
          </Card.Body>
        </Card>
      );
    }
  export default Exercise1;