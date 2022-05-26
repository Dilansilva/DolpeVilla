import {useState} from 'react';
import {Modal} from 'react-bootstrap';
import '../App.css';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

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
          style={{
            backgroundImage:`url("https://i.postimg.cc/Y9GRv6Hc/Mobile-Pop-Up-Back-Ground.jpg")`,
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
            <img src="https://i.postimg.cc/zf4dLx88/277835036-3202617223360264-4709564501185670549-n.jpg" className="mainLogo"/><br/>
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