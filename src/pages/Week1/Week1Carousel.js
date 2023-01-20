import { Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Box from '@mui/material/Box'
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Day1 from './Day1/Day1'

const inf = 9999999999999;
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Week1Carousel = () => {

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

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
                <Button text-align="center" variant="outlined" onClick={handleClickOpen} >Go To Day 1</Button>
                </div>
                <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Day 1
            </Typography>
          </Toolbar>
        </AppBar>
        <Day1/>
      </Dialog>
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