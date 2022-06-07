import {useState,useEffect} from 'react';
import {Modal} from 'react-bootstrap';
import '../App.css';
import {widthScreen} from "../constant/Constant"

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
       {width < widthScreen ?
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="taransParentMobile"
          style={{
            backgroundImage:`url("https://i.postimg.cc/T3nvLw29/IMG-20220525-WA0008.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Modal.Header
            style={{border:'none'}}
            closeButton
          >
          </Modal.Header>
          <Modal.Body className='textAlign'>
            <img src="https://i.postimg.cc/P5gL6Mzy/277835036-3202617223360264-4709564501185670549-n-removebg-preview.png" className="mainLogo"/><br/>
          <div className='greenColor'><br/>
            <div style={{marginLeft:'5%',marginRight:'5%'}}><p>WELCOME TO DOLAPE VILLA ELLA</p><br/></div>
          </div>
          <div><br/></div>
          </Modal.Body>          
        </Modal> : null}
      </>
    );
}

export default MobilePopUp;