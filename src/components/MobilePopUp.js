import {useState} from 'react';
import {Button,Modal} from 'react-bootstrap';
import '../App.css';

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
           <p>dolpe Villa</p>
          </Modal.Header>
          <Modal.Body className='textAlign'>
           <p>Dolpe Villa</p><br/>
          <div className='greenColor'>
            <p>Welcome <br/>
            To <br/>Dolpe
             <br/>Villa Ella</p><br/>
          </div>
          </Modal.Body>          
        </Modal>
      </>
    );
}

export default MobilePopUp;