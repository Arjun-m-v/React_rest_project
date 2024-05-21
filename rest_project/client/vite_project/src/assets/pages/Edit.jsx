import { useState,React, useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { editEmployee, getEmployee } from '../../services/allApi';
import { toast } from 'react-toastify';


function Edit() {

    const [EmployeeData,setEmployeeData]=useState({
        name:"",age:"",phone:"",email:"",dept:""
    })

    console.log(EmployeeData);

    const {id}=useParams()
    console.log(id);
    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        getEmployee(id).then(res=>{
            setEmployeeData({name:res.data.empname,age:res.data.age,phone:res.data.phone,email:res.data.email,dept:res.data.department})
    }).catch(err=>{console.log(err);})

    const handleUpdate=(e)=>{
        e.preventDefault()
        const {name,age,email,phone,dept}=EmployeeData
        if (!name || !age || !email || !phone || !dept){
            toast.warning("Invalid Output")
        }
        else{
            editEmployee(EmployeeData.id,{empname:name,age,phone,department:dept}).then(res=>{
                toast.success("Employee Updated")
            }).catch(err=>{
                toast.error("Employee Edit Failed")
            })
        }
    }

}
  return (
    <>
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <div className='w-50 border shadow'>
                <h1 className='text-success'>Edit Employee</h1>
                <form>
                    <FloatingLabel controlId="floatingname" label="Employee Name" className="mb-3">
                        <Form.Control onChange={(e)=> { setEmployeeData({ ...EmployeeData ,name:e.target.value}) } } type="text" placeholder="Arjun" value={EmployeeData.name}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingage" label="Employee Age" className="mb-3">
                        <Form.Control onChange={(e)=> { setEmployeeData({ ...EmployeeData, age:e.target.value}) } } type="number" placeholder="xx" value={EmployeeData.age}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control onChange={(e)=> { setEmployeeData({ ...EmployeeData, email:e.target.value}) } } type="email" placeholder="name@gmail.com" value={EmployeeData.email}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPhone" label="Phone number" className="mb-3">
                        <Form.Control onChange={(e)=> { setEmployeeData({ ...EmployeeData, phone:e.target.value}) } } type="number" placeholder="9xxxxxxxxx" value={EmployeeData.phone}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingdpt" label="Department" className="mb-3">
                        <Form.Control onChange={(e)=> { setEmployeeData({ ...EmployeeData, dept:e.target.value}) } } type="text" placeholder="IT" value={EmployeeData.dept}/>
                    </FloatingLabel>
                    <div className='text-center mt-2 d-flex justify-content-around'>
                        <button className='btn btn-primary' onClick={(e)=>{handleupdate(e)}}>Submit</button>
                        <button className='btn btn-danger' type='button'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Edit
