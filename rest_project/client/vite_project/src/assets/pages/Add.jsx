import { useState,React } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addEmployee } from '../../services/allApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Add() {

const [ formData,setFormData ]=useState({
    name:"",age:"",email:"",phone:"",dept:""
})
const navigate=useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    const {name,age,email,phone,dept}=formData
    if(!name || !age || !email || !phone || !dept){
        toast.warning("invalid Inputs")
    }
    else{
        const result=addEmployee({empname:name,age,email,phone,department:dept})
        result.then(res=>{
            toast.success("Employee Added Successfully")
            setFormData({name:"",age:"",email:"",phone:"",dept:""})
            navigate('/')
        }).catch(err=>{
            alert("Employee Addedd Failed!")
            console.log(err);
        })
    }
}

const handleCancel=()=>{
    setFormData({name:"",age:"",email:"",phone:"",dept:""})
    navigate('/')
}

  return (
    <>
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <div className='w-50 border shadow'>
                <h1 className='text-success'>Add Employee</h1>
                <form>
                    <FloatingLabel controlId="floatingname" label="Employee Name" className="mb-3">
                        <Form.Control onChange={(e)=> { setFormData({ ...formData, name:e.target.value}) } } type="text" placeholder="Arjun" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingage" label="Employee Age" className="mb-3">
                        <Form.Control onChange={(e)=> { setFormData({ ...formData, age:e.target.value}) } } type="number" placeholder="xx" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control onChange={(e)=> { setFormData({ ...formData, email:e.target.value}) } } type="email" placeholder="name@gmail.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPhone" label="Phone number" className="mb-3">
                        <Form.Control onChange={(e)=> { setFormData({ ...formData, phone:e.target.value}) } } type="number" placeholder="9xxxxxxxxx" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingdpt" label="Department" className="mb-3">
                        <Form.Control onChange={(e)=> { setFormData({ ...formData, dept:e.target.value}) } } type="text" placeholder="IT" />
                    </FloatingLabel>
                    <div className='text-center mt-2 d-flex justify-content-around'>
                        <button className='btn btn-primary' onClick={(e)=>handleSubmit(e)}>Submit</button>
                        <button className='btn btn-danger'  onClick={(e)=>handleCancel(e)}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Add
