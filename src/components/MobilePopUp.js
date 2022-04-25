import {useState} from 'react';
import {Button,Modal} from 'react-bootstrap';
import '../App.css';
import logo from '../assets/68681472_114368466589511_8231771088728621056_n.jpg';
import background from '../assets/MobilePopUpBackGround.jpg';

const MobilePopUp = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
  
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="taransParentMobile"
        >
          <Modal.Header
            style={{border:'none'}}
            closeButton
          >
           <img src={logo} className="minorLogo"/>
          </Modal.Header>
          <Modal.Body className='textAlign'>
            <img src={logo} className="mainLogo"/><br/>
          <div className='greenColor'>
            <br/>
            <p>WELCOME<br/>
            TO <br/>DOLPE
             <br/>VILLA ELLA</p><br/>
          </div>
          </Modal.Body>          
        </Modal>
      </>
    );
}

export default MobilePopUp;