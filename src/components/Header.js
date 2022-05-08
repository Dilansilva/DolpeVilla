import {useState,useEffect} from 'react';

import '../App.css';
import {Container,Navbar,ToggleButton,Nav,NavDropdown} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

import MobilePopUp from './MobilePopUp';
import logo from '../assets/68681472_114368466589511_8231771088728621056_n.jpg';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

function Header(){

  const navigate = useNavigate();

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
  }

  const {height,width} = useWindowDimensions();

 return(
  <>
         {width < 480 ? <MobilePopUp/> : null }
     {width > 480 ? <Navbar className='upperDiv hiddenUpperDiv' expand="lg"></Navbar> : null }
     {width > 480 ? <> {/*Computer navigation bar */}
      <Navbar className="taransParent">
        <Container className="taransParent">
          <Navbar.Brand href="#home">
          <img src={logo} className="minorLogo"/>
          </Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <ToggleButton className="gardientBtn"><b>COVID-19 UPDATES</b></ToggleButton>
              <ToggleButton className="gardientBtn">GALLERY</ToggleButton>
              <ToggleButton className="gardientBtn">CONTACT US</ToggleButton>
              <ToggleButton className="gardientBtn">PROMOTIONS</ToggleButton>
            </Navbar.Collapse>
        </Container>
      </Navbar>
     </> : null
     }
     
      {
        width > 480 ? <> {/*Computer navigation bar */}
        <Navbar className="taransParent">
        <Container className="taransParent">
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/")}}><b>HOME</b></ToggleButton>
              <ToggleButton className="gardientBtn">LOCATION</ToggleButton>
              <ToggleButton className="gardientBtn">ACCOMMODATION</ToggleButton>
              <ToggleButton className="gardientBtn">FACILITIES</ToggleButton>
              <ToggleButton className="gardientBtn">DINNING</ToggleButton>
              <ToggleButton className="gardientBtn">THINGS TO DO</ToggleButton>              
            </Navbar.Collapse>
        </Container>
      </Navbar>  
        </> : 
        <> {/*mobile view navigation bar */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home">
        Dice Roller
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
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
    </Navbar>
        </>
      }
  </>
 
 );   
}

export default Header;