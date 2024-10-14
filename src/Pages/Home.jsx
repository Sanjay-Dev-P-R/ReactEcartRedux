
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';

function Home() {


  const data = useFetch('https://dummyjson.com/products')
  console.log(data);

  const dispatch = useDispatch()



  return (
   <div>
   <Row className='m-5'>
   {
    data.length>0 ? data.map((item)=>(
      <Col sm={12} md={6} lg={4} xl={3}>
   <MDBCard className='m-3'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={item.thumbnail} position='top' alt='...' width={'200px'} height={'260px'} />
        {/* <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a> */}
      </MDBRipple>
      <MDBCardBody className='text-center'>
        <MDBCardTitle>{item.title.slice(0,30)}</MDBCardTitle>
        <MDBCardTitle>$ {item.price}</MDBCardTitle>
        <MDBCardText>
         {item.description.slice(0,40)}...
        </MDBCardText>
        <div className='d-flex justify-content-between'>
        <MDBBtn className='btn btn-light'><i onClick={()=>dispatch(addToWishlist(item))} className='fa-solid fa-heart text-danger fs-2' ></i></MDBBtn>
        <MDBBtn className='btn btn-light'><i onClick={()=>dispatch(addToCart(item))} className='fa-solid fa-cart-plus text-success fs-2' ></i></MDBBtn>
        </div>
       
      </MDBCardBody>
    </MDBCard>
   </Col>
    ))
      :'no products available'}
   </Row>
   
   
   </div>
  )
}

export default Home