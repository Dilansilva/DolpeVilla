import React from "react";
import {Container,Navbar,ToggleButton,Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

function MiddleBar() {
  const navigate = useNavigate();
    return(
        <div>
           <Navbar className="taransParentMiddleBar">
        <Container >
         
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-center">
              <Button style={{fontWeight:'bold',borderColor:'white',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)'}} onClick={() => {navigate("/bookings")}}>
                  MAKE A RESERVATION
              </Button>
              <Button style={{fontWeight:'bold',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)'}} onClick={() => {navigate("/bookings")}}>
              CHECK IN
              </Button>              
              <Button style={{fontWeight:'bold',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)'}} onClick={() => {navigate("/bookings")}}>
              CHECK OUT
              </Button>              
              <Button style={{fontWeight:'bold',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)'}} onClick={() => {navigate("/bookings")}}>
              SELECT YOUR COUNTRY
              </Button>              
              <Button style={{fontWeight:'bold',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)'}} onClick={() => {navigate("/bookings")}}>
              BOOK NOW
              </Button>            
            </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
}

export default MiddleBar;