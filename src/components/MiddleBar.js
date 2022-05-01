import React from "react";
import {Container,Navbar,ToggleButton} from 'react-bootstrap';

function MiddleBar() {
    return(
        <div>
           <Navbar className="taransParentMiddleBar">
        <Container >
         
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-center">
              <ToggleButton className="gardientBtn"><b>MAKE A RESERVATION</b></ToggleButton>
              <ToggleButton className="gardientBtn">CHECK IN</ToggleButton>
              <ToggleButton className="gardientBtn">CHECK OUT</ToggleButton>
              <ToggleButton className="gardientBtn">SELECT YOUR COUNTRY</ToggleButton>
              <ToggleButton className="gardientBtn">BOOK NOW</ToggleButton>
            </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
}

export default MiddleBar;