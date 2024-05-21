import React from 'react'
import { Col,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Addcustomer from '../components/Addcustomer';
import { Link } from 'react-router-dom';

function Customer() {
  return (
    <>
      <div className='container-fluid p-5'>
        <h2 className='mb-2'>Customers</h2>
        <Row>
          <Col sm={6} md={2}>
            <Addcustomer/>
          </Col>
          <Col sm={6} md={10}>
            <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/52/37/18/360_F_252371808_YjQRQY8aOCMfQcFZsWrjfevycGgEOzSn.jpg" />
            <Card.Body>
              <Card.Title>
                KL 58 A 1423
              </Card.Title>
              <Card.Text>
                <h5><b>Customer : Arjun MV</b></h5>
                <p>Customer : 9947354942</p>
              </Card.Text>
              <Link to={'/service'} className='btn btn-primary'>Services</Link>
            </Card.Body>
            </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Customer