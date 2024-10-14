import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { deleteFromWishlist } from '../Redux/slices/wishlistSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../Redux/slices/cartSlice';



function Wishlist() {

  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()

  const handleWishlistToCart=(item)=>{
    dispatch(addToCart(item))
    dispatch(deleteFromWishlist(item.id))
  }
  

  return (
    <div>
      <Row>
        {
          wishlistArray.length>0? wishlistArray.map((item)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <MDBCard className='m-3'>
               <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                 <MDBCardImage src={item.thumbnail} position='top' alt='...' width={'200px'} height={'260px'} /> 
               </MDBRipple>
               <MDBCardBody className='text-center'>
                 <MDBCardTitle>{item.title.slice(0,30)}</MDBCardTitle>
                 <MDBCardTitle>{item.price}</MDBCardTitle>
                 <MDBCardText>
                  {item.description.slice(0,40)}...
                 </MDBCardText>
                 <div className='d-flex justify-content-between'>
                 <MDBBtn className='btn btn-light'><i onClick={()=>dispatch(deleteFromWishlist(item.id))} className='fa-solid fa-trash text-danger fs-2' ></i></MDBBtn>
                 <MDBBtn className='btn btn-light'><i onClick={()=>handleWishlistToCart(item)} className='fa-solid fa-cart-plus text-success fs-2' ></i></MDBBtn>
                 </div>
                
               </MDBCardBody>
             </MDBCard>
            </Col>
          )): <div className='text-center'>
            <img src="https://static.wixstatic.com/media/7742ef_dfe620d0354b471b8620fcb2c3a46e62~mv2.gif" alt="" />
            <h2 className='m-2'>Your wishlist is empty</h2><br />
            <Link to={'/'}>
            <button className='btn btn-dark'>Back to home</button>
            </Link>
          </div>
        }
      </Row>
    </div>
  )
}

export default Wishlist