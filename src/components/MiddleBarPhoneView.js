import React from "react";
import {Container,Navbar,NavDropdown,Nav,Button} from 'react-bootstrap';
import '../../src/App.css';
import {useNavigate} from "react-router-dom";
import {FiAlignJustify} from "react-icons/fi";

function MiddleBarPhoneView() {
    const navigate = useNavigate();
    return(
        <>
            <Navbar style={{background:'transparent'}} expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                    <img src="https://i.postimg.cc/w3YttVFG/68681472-114368466589511-8231771088728621056-n.jpg" style={{height:'80px'}}/>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span>
                    <FiAlignJustify
                    />
                    </span>
                </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">COVID-19 UPDATES</Nav.Link>
                        <Nav.Link href="#pricing">GALLERY</Nav.Link>
                        <Nav.Link href="#features">CONTACT US</Nav.Link>
                        <Nav.Link href="#pricing">PROMOTIONS</Nav.Link>
                        <Nav.Link href="#features">HOME</Nav.Link>
                        <Nav.Link href="/location">LOCATION</Nav.Link>
                        <Nav.Link href="#features">ACCOMMODATION</Nav.Link>
                        <Nav.Link href="#pricing">FACILITIES</Nav.Link>
                        <Nav.Link href="#features">DINNING</Nav.Link>
                        <Nav.Link href="#pricing">THINGS TO DO</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{textAlign:"center"
                        ,padding:'15%',
                        backgroundImage:`url("https://i.postimg.cc/gc7DNV6B/48800644637-e09e7ecc6b-b.jpg")`,
                        backgroundPosition:'bottom 30% right 1%'}} className="d-grid gap-2">
                        
                <h1 className="dolpeMainText">DOLPE VILLA <br/>ELLA</h1>
                <Button size="lg" style={{margin:'1%',backgroundColor:'transparent',background:'rgba(45, 45, 45, 0.5)'}} onClick={() => {navigate("/bookings")}}>
                    MAKE A RESERVATION
                </Button>
                <Button  style={{margin:'1%',backgroundColor:'transparent',border:'1px',background:'rgba(45, 45, 45, 0.5)'}}  size="lg" onClick={() => {navigate("/bookings")}}>
                CHECK IN
                </Button>
                <Button  style={{margin:'1%',backgroundColor:'transparent',border:'1px',background:'rgba(45, 45, 45, 0.5)'}} size="lg" onClick={() => {navigate("/bookings")}}>
                CHECK OUT
                </Button>
                <Button  style={{margin:'1%',backgroundColor:'transparent',border:'1px',background:'rgba(45, 45, 45, 0.5)'}} size="lg" onClick={() => {navigate("/bookings")}}>
                SELECT YOUR COUNTRY
                </Button>
                <Button  style={{margin:'1%',backgroundColor:'transparent',border:'1px',background:'rgba(45, 45, 45, 0.5)'}} size="lg"  onClick={() => {navigate("/bookings")}}>
                BOOK NOW
                </Button>
            </div>
        </>
    );
}

export default MiddleBarPhoneView;