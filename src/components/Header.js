import {useState,useEffect} from 'react';
import '../App.css';
import {Container,Navbar,ToggleButton} from 'react-bootstrap';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

function Header(){
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
     {width > 480 ? <Navbar className='upperDiv hiddenUpperDiv' expand="lg"></Navbar> : null}
      <Navbar className="taransParent">
        <Container className="taransParent">
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <ToggleButton className="gardientBtn"><b>COVID-19 UPDATES</b></ToggleButton>
              <ToggleButton className="gardientBtn">GALLERY</ToggleButton>
              <ToggleButton className="gardientBtn">CONTACT US</ToggleButton>
              <ToggleButton className="gardientBtn">PROMOTIONS</ToggleButton>
            </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar className="taransParent">
        <Container className="taransParent">
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <ToggleButton className="gardientBtn"><b>HOME</b></ToggleButton>
              <ToggleButton className="gardientBtn">LOCATION</ToggleButton>
              <ToggleButton className="gardientBtn">ACCOMMODATION</ToggleButton>
              <ToggleButton className="gardientBtn">FACILITIES</ToggleButton>
              <ToggleButton className="gardientBtn">DINNING</ToggleButton>
              <ToggleButton className="gardientBtn">THINGS TO DO</ToggleButton>              
            </Navbar.Collapse>
        </Container>
      </Navbar>
  </>
 
 );   
}

export default Header;