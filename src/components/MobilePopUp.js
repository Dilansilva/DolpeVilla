import {useState,useEffect} from 'react';
import {Button,Modal} from 'react-bootstrap';

const MobilePopUp = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <br/>
          <br/>
          <Modal.Footer>
           <br/>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default MobilePopUp;