import React from "react";
import {Container,Navbar,ToggleButton} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

function MiddleBar() {
  const navigate = useNavigate();
    return(
        <div>
           <Navbar className="taransParentMiddleBar">
        <Container >
         
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-center">
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/bookings")}}><b>MAKE A RESERVATION</b></ToggleButton>
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/bookings")}}>CHECK IN</ToggleButton>
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/bookings")}}>CHECK OUT</ToggleButton>
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/bookings")}}>SELECT YOUR COUNTRY</ToggleButton>
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/bookings")}}>BOOK NOW</ToggleButton>
            </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
}

export default MiddleBar;