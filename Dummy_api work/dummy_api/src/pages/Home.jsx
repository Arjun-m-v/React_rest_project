import React from 'react'
import { getProducts } from '../services/allApis'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

function Home() {

    const [products,setProducts]=useState([])

    useEffect(()=>{
        console.log("Home");
        getProducts().then((res)=>setProducts(res.data))
    },[])

    console.log(products);

  return (
    <>
        <div className='container-fluid'>
            <h1 className='text-primary'>Products</h1>
            <div className='row'>
            {
                products.length>0 ? 
                products.map(item=>(
                    <Card style={{ width: '18rem' }} className='shadow m-3'>
                    <Card.Img variant="top" src={item.products.image} style={{height:"200px"}} />
                    <Card.Body>
                        <Card.Title>{item.products.title}</Card.Title>
                        <Card.Text>
                        {item.products.price}
                        </Card.Text>
                        {/* <Link className='btn btn-primary' to={`/det/${item.products.id}`}>Show deatils</Link> */}
                    </Card.Body>
                    </Card>
                )) : <h3>No products Available</h3>
            }
            </div>
        </div>
    </>
  )
}

export default Home
