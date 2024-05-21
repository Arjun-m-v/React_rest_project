import React from 'react'
import { getProducts } from '../services/allApis'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

function Home() {

    const [products,setProducts]=useState([])

    useEffect(()=>{
        console.log("Home");
        getProducts().then((res)=>{
            setProducts(res.data.products)
        })
    },[])

    console.log(products);

  return (
    <>
        <div className='container-fluid'>
            <h1 className='text-primary text-center'>PRODUCTS</h1>
            <div className='row'>
            {
                products.length>0 ? 
                products.map(item=>(
                    <Card style={{ width: '18rem' }} className='shadow m-3'>
                    <Card.Img variant="top" src={item.thumbnail} style={{height:"200px"}} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                        <h3>{item.brand} {item.category}</h3>
                        <h2>${item.price}</h2> <br />
                        <h5>{item.discountPercentage}% Discount <br /></h5>
                        <h4>Rating : {item.rating} / 5 <br /></h4>
                        {item.description} <br />
                        <h5>{item.stock} stocks are available</h5> <br />  
                        </Card.Text>
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
