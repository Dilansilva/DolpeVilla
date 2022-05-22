import React from "react";
import { Modal } from "react-bootstrap";

const AccModal = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>
                    <Modal.Body style={{backgroundColor:'black'}}><div>{props.body}</div></Modal.Body>
            </Modal>
        </>
    );
}

export default AccModal;