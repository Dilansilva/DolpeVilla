import {useState,useEffect} from 'react';

import '../App.css';
import {Container,Navbar,Nav,Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import {FiAlignJustify} from "react-icons/fi";

import MobilePopUp from './MobilePopUp';
import {widthScreen} from "../constant/Constant"

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
     {width > widthScreen ? <Navbar className='upperDiv hiddenUpperDiv' expand="lg"></Navbar> : null }
     {width > widthScreen ? <> {/*Computer navigation bar */}
      <Navbar style={{border:0,boxShadow:'none',background: 'rgba(18, 64, 23, 0.5)'}}>
        <Container>
          <Navbar.Brand onClick={() => {navigate("/")}}>
          <img src="https://i.postimg.cc/P5gL6Mzy/277835036-3202617223360264-4709564501185670549-n-removebg-preview.png" className="minorLogo"/>
          </Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Button style={{fontWeight:'bold',borderColor:'white',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)' }} className="gardientBtn" onClick={covidPage}><b>COVID</b></Button>
              <Button style={{fontWeight:'bold',borderColor:'white',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)'}} className="gardientBtn" onClick={() => {navigate("/gallery")}}>GALLERY</Button>
              <Button style={{fontWeight:'bold',borderColor:'white',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)'}} className="gardientBtn" onClick={() => {navigate("/contact")}}>CONTACTS</Button>
              <Button style={{fontWeight:'bold',borderColor:'white',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)'}} className="gardientBtn" onClick={() => {navigate("/promotion")}}>PROMOTIONS</Button>
            </Navbar.Collapse>
        </Container>
      </Navbar>
     </> : null
     }
     
      {
        width > widthScreen ? <> {/*Computer navigation bar */}
        <Navbar style={{border:0,boxShadow:'none',background: 'rgba(18, 64, 23, 0.5)'}}>
        <Container>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Button style={{fontWeight:'bold',borderColor:'white',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)'}} className="gardientBtn" onClick={() => {navigate("/")}}><b>HOME</b></Button>
              <Button style={{fontWeight:'bold',borderColor:'white',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)'}} className="gardientBtn" onClick={() => {navigate("/location")}}>LOCATION</Button>
              <Button style={{fontWeight:'bold',borderColor:'white',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)'}} className="gardientBtn" onClick={() => {navigate("/accomadation")}}>ACCOMMODATION</Button>
              <Button style={{fontWeight:'bold',borderColor:'white',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)'}} className="gardientBtn" onClick={() => {navigate("/facilities")}}>FACILITIES</Button>
              <Button style={{fontWeight:'bold',borderColor:'white',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)'}} className="gardientBtn" onClick={() => {navigate("/dinning")}}>DINNING</Button>
              <Button style={{fontWeight:'bold',borderColor:'white',color:'white',backgroundColor:'transparent',background:'linear-gradient(180deg, #124016 11.46%, rgba(11, 20, 100, 0) 100%)'}} className="gardientBtn" onClick={() => {navigate("/things")}}>THINGS TO DO</Button>              
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