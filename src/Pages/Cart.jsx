import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { deleteFromCart, emptyCart } from '../Redux/slices/cartSlice';
import { useDispatch } from 'react-redux';


function Cart() {

  const cart =  useSelector((state)=>state.cartReducer)
  console.log(cart);        

  const dispatch = useDispatch()    

  const navigate = useNavigate()

  const  [total,setTotal]= useState(0)
  
  const getCartTotal=()=>{
    if (cart.length>0){
      setTotal(cart.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
  console.log(total);

  const handleCheckOut=()=>{
    if(cart.length>0){
      dispatch(emptyCart())
    alert("Order Place Successfully")
    navigate('/')
    }
    else{
      alert("Your Cart Was Empty")
    }
  }

  useEffect(()=>{
    getCartTotal()
  },[cart])


  return (
    <>
      <Row>
      <Col className='container' >
      {
        cart.length>0?  
        <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Product Name</th>
            <th scope='col'>Image</th>
            <th scope='col'>Price</th>
            <th scope='col'>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {
            cart.map((item,index)=>(
              <tr className='table-active'>
              <th scope='row'>{index+1}</th>
              <td>{item.title}</td>
              <td> <img style={{width:'100px',height:'100px'}} src={item.thumbnail} alt="" /> </td>
              <td>${item.price}</td>
              <td><i onClick={()=>dispatch(deleteFromCart(item.id))} className='fa-solid fa-trash text-danger'></i> </td>
            </tr>
            ))
            
          }
        </MDBTableBody> 
        </MDBTable>:
         <div className='text-center'>
         <img src="https://www.gospeedy.co.in/images/empty.gif" alt="" />
         <h1 className='m-2'>Your Cart is Empty</h1>
         <Link to={'/'}>
         <button className='btn btn-primary '>Back to Home</button>
 
         </Link>
        </div>
      }
      </Col>
      
      <Col>
      <div className='m-2' >
        <h1 className='text-center m-4'>Cart Summary</h1>
        <h3>Total number of products : {cart.length}</h3><br />
        <h2>Total : $ {total}</h2>
        <div className='text-center m-4'>
          <button onClick={handleCheckOut} className='btn btn-success m-2'>Check Out</button>
        </div>
      </div>  
      </Col>
      </Row>
    </>
  )
}

export default Cart