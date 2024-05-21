import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddServices() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
        <button className='btn btn-info' onClick={handleShow}>Add Service</button>

        <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <FloatingLabel controlId="floatingTitle" label="ServiceTitle" className="mb-3">
                <Form.Control type="text" placeholder="" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingNotes" label="Notes" className="mb-3">
                <Form.Control type="text" placeholder="n" />
            </FloatingLabel>
            <FloatingLabel controlId="Amount" label="Amount" className="mb-3">
                <Form.Control type="number" placeholder="" />
            </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary">
                Add
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default AddServices
