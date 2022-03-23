import {useState,useEffect} from 'react';
import '../App.css';
import {Container,Navbar,Nav,NavDropdown,Form,Button,FormControl,ButtonGroup,ToggleButton} from 'react-bootstrap';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
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
     <Navbar expand="lg" className="taransParent">
  <Container className="taransParent">
    <Navbar.Brand href="#">sample text</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <ToggleButton className="gardientBtn"><b>Primary</b></ToggleButton>
        <ToggleButton className="gardientBtn">Primary</ToggleButton>
        <ToggleButton className="gardientBtn">Primary</ToggleButton>
        <ToggleButton className="gardientBtn">Primary</ToggleButton>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
   </>
 );   
}

export default Header;