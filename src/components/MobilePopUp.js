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
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body className='textAlign'>
            <br/>
           <p>Welcome To Dolpe Villa Ella</p>
          </Modal.Body>
         
          <Modal.Footer>
           <br/>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default MobilePopUp;