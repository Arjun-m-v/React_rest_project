import { useState,React } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Edit() {

const [ formData,setFormData ]=useState({
    name:"",age:"",email:"",phone:"",dept:""
})

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
}

  return (
    <>
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <div className='w-50 border shadow'>
                <h1 className='text-success'>Edit Employee</h1>
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
                        <button className='btn btn-danger' type='button'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Edit
