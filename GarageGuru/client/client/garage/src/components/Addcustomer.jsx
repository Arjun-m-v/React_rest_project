import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Addcustomer() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <button className='btn btn-info' onClick={handleShow}>Add Cutomer</button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <FloatingLabel controlId="floatingName" label="CustomerName" className="mb-3">
                <Form.Control type="text" placeholder="" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPhone" label="Phone Number" className="mb-3">
                <Form.Control type="number" placeholder="n" />
            </FloatingLabel>
            <FloatingLabel controlId="Kilometer" label="Running Kilometers" className="mb-3">
                <Form.Control type="number" placeholder="" />
            </FloatingLabel>
            <FloatingLabel controlId="Vehicle" label="Vehicle Registration" className="mb-3">
                <Form.Control type="text" placeholder="" />
            </FloatingLabel>
            <FloatingLabel controlId="VehicleImage" label="vehicleimage">
                <Form.Control type="file" placeholder="" />
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

export default Addcustomer
