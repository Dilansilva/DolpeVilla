import {useState,useEffect} from 'react';

import '../App.css';
import {Container,Navbar,ToggleButton,Nav,NavDropdown} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

import MobilePopUp from './MobilePopUp';

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

  const covidPage = () => {
    window.open("https://www.hpb.health.gov.lk/en");
  }

 return(
  <>
         {width < 820 ? <MobilePopUp/> : null }
     {width > 820 ? <Navbar className='upperDiv hiddenUpperDiv' expand="lg"></Navbar> : null }
     {
     width > 820 ? <> {/*Computer navigation bar */}
      <Navbar className="taransParent">
        <Container className="taransParent">
          <Navbar.Brand onClick={() => {navigate("/")}}>
          <img src="https://i.postimg.cc/w3YttVFG/68681472-114368466589511-8231771088728621056-n.jpg" className="minorLogo"/>
          </Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <ToggleButton className="gardientBtn" onClick={covidPage}><b>COVID-19 UPDATES</b></ToggleButton>
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/gallery")}}>GALLERY</ToggleButton>
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/contact")}}>CONTACT US</ToggleButton>
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/promotion")}}>PROMOTIONS</ToggleButton>
            </Navbar.Collapse>
        </Container>
      </Navbar>
     </> : null
     }
     
      {
        width > 820 ? <> {/*Computer navigation bar */}
        <Navbar className="taransParent">
        <Container className="taransParent">
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/")}}><b>HOME</b></ToggleButton>
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/location")}}>LOCATION</ToggleButton>
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/accomadation")}}>ACCOMMODATION</ToggleButton>
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/facilities")}}>FACILITIES</ToggleButton>
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/dinning")}}>DINNING</ToggleButton>
              <ToggleButton className="gardientBtn" onClick={() => {navigate("/things")}}>THINGS TO DO</ToggleButton>              
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