import {useState,useEffect} from 'react';
import '../App.css';
import {Container,Navbar,ToggleButton,Nav,NavDropdown} from 'react-bootstrap';

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
     {width > 480 ? <Navbar className='upperDiv hiddenUpperDiv' expand="lg"></Navbar> : null }
     {width > 480 ? <> {/*Computer navigation bar */}
      <Navbar className="taransParent">
        <Container className="taransParent">
          <Navbar.Brand href="#home">#</Navbar.Brand>
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
              <ToggleButton className="gardientBtn"><b>HOME</b></ToggleButton>
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
      <Navbar.Brand href="#home">
        Dice Roller
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        </>
      }
  </>
 
 );   
}

export default Header;