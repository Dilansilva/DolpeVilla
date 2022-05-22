import React from "react";
import { Modal } from "react-bootstrap";

const AccModal = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                    <Modal.Body><div>{props.body}</div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AccModal;