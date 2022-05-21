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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
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