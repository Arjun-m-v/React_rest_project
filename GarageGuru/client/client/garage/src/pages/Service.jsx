import React from 'react'
import { Row,Col } from 'react-bootstrap'
import AddServices from '../components/AddServices'

function Service() {
  return (
    <>
      <div className='container-fluid p-5'>
        <h3 className='mb-3'>Services</h3>
        <Row>
          <Col sm={6} md={2}>
            <AddServices />
          </Col>
          <Col sm={6} md={10}>
            <table className='table table-info table-bordered'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Notes</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Oil Change</td>
                  <td>Use Premium Only</td>
                  <td>500</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Service