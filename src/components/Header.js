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

  /*header button */
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
    { name: 'Radio', value: '4' },
  ];

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
         <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
   </>
 );   
}

export default Header;