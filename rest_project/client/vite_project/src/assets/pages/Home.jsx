import { useEffect,useState } from 'react'
import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { allEmployee, deleteEmployee } from '../../services/allApi'
import Details from '../components/Details'

function Home() {
    const [Employee,setEmployee]=useState([])
    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        allEmployee().then(res=>{
            console.log(res);
            setEmployee(res.data)
        }).catch(err=>{console.log(err)})
    }

    const handleDelete=(id)=>{
        deleteEmployee(id).then(res=>{
            console.log(res);
            getData()
        }).catch(err=>{
            console.log(err)
        })
        

    }

    console.log(Employee);
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
                        {
                            Employee.length > 0 ?
                            Employee.map(item => (
                                <tr>
                            <td>{item.id}</td>
                            <td>{item.empname}</td>
                            <td>{item.phone}</td>
                            <td>
                                <Details emp={item}/>
                                <Link to={`edit/${item.id}`} className='btn m-2'>
                                    <i className="fa-regular fa-pen-to-square" />
                                </Link>
                                <button className='btn' onClick={()=>(handleDelete(item.id))}>
                                    <i className="fa-solid fa-trash" style={{color: "#e60a0a",}} />
                                </button>
                            </td>
                        </tr>
                            ))
                            :
                            <h4 className='text-danger text-center'>No Data Avilable</h4>
                        }
                        
                    </tbody>
                </table>
            </Col>
        </Row>
        </div>

        </>
    )
    }

    export default Home
