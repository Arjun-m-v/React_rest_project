import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>

    <div className='container-fluid p-5'>
    <Row>
        <Col sm={12} md={3}>
            <Link to={'/add'} className='btn btn-success shadow'>Add New Employee</Link>
        </Col>
        <Col sm={12} md={9}>
            <table className='table table-info border shadow'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ajith</td>
                        <td>9876543210</td>
                        <td>
                        <Link to={'/edit'} className='btn btn-info m-2'>Edit</Link>
                            <button className='btn btn-info'>
                                View Details
                            </button>
                            <button className='btn m-2'>
                                <i className="fa-regular fa-pen-to-square" />
                            </button>
                            <button className='btn'>
                                <i className="fa-solid fa-trash" style={{color: "#e60a0a",}} />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Col>
    </Row>
    </div>

    </>
  )
}

export default Home
