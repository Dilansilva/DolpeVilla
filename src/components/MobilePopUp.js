import {useState,useEffect} from 'react';
import {Modal} from 'react-bootstrap';
import '../App.css';
import logo from '../assets/68681472_114368466589511_8231771088728621056_n.jpg';
import background from '../assets/MobilePopUpBackGround.jpg';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

const MobilePopUp = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

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
  
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="taransParentMobile"
          style={{
            backgroundImage:`url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Modal.Header
            style={{border:'none'}}
            closeButton
          >
           <img src={logo} className="minorLogo"/>
          </Modal.Header>
          <Modal.Body className='textAlign'>
            <img src={logo} className="mainLogo"/><br/>
          <div className='greenColor'><br/>
            <div style={{marginLeft:'5%',marginRight:'5%'}}><p>WELCOME TO DOLPE VILLA ELLA</p><br/></div>
          </div>
          <div><br/></div>
          </Modal.Body>          
        </Modal>
      </>
    );
}

export default MobilePopUp;