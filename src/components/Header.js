import {useState,useEffect} from 'react';

import '../App.css';
import {Container,Navbar,ToggleButton,Nav,NavDropdown} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import {FiAlignJustify} from "react-icons/fi";

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
         {width < 480 ? <MobilePopUp/> : null }
     {width > 480 ? <Navbar className='upperDiv hiddenUpperDiv' expand="lg"></Navbar> : null }
     {width > 480 ? <> {/*Computer navigation bar */}
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
        width > 480 ? <> {/*Computer navigation bar */}
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
                        <Nav.Link href="#features" onClick={covidPage}>COVID-19 UPDATES</Nav.Link>
                        <Nav.Link href="#pricing" onClick={() => {navigate("/gallery")}}>GALLERY</Nav.Link>
                        <Nav.Link href="#features" onClick={() => {navigate("/contact")}}>CONTACT US</Nav.Link>
                        <Nav.Link href="#pricing" onClick={() => {navigate("/promotion")}}>PROMOTIONS</Nav.Link>
                        <Nav.Link href="#features" onClick={() => {navigate("/")}}>HOME</Nav.Link>
                        <Nav.Link href="#location" onClick={() => {navigate("/location")}}>LOCATION</Nav.Link>
                        <Nav.Link href="#features" onClick={() => {navigate("/accomadation")}}>ACCOMMODATION</Nav.Link>
                        <Nav.Link href="#pricing" onClick={() => {navigate("/facilities")}}>FACILITIES</Nav.Link>
                        <Nav.Link href="#features" onClick={() => {navigate("/dinning")}}>DINNING</Nav.Link>
                        <Nav.Link href="#pricing" onClick={() => {navigate("/things")}}>THINGS TO DO</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
      }
  </>
 
 );   
}

export default Header;