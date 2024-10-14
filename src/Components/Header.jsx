import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MDBBadge } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

  const wishlist = useSelector((state)=>state.wishlistReducer)//array of data
  console.log(wishlist);

  const cart =  useSelector((state)=>state.cartReducer)
  console.log(cart);


  return (
    <>
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"> 
        <i class="fa-solid fa-bag-shopping m-1"></i>Shopzy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Link to={'/wishlist'}>
            <Nav.Link href="#deets">
            Wishlist
              <i className='fa-solid fa-heart text-danger m-2'></i>
              <MDBBadge color='danger' light pill className='position-absolute translate-middle'>
          {wishlist.length}
          <span class="visually-hidden">unread messages</span>
        </MDBBadge></Nav.Link>
        </Link>

        <Link to={'/cart'}>
            <Nav.Link eventKey={2}  href="#memes" >
            Cart
            <i className='fa-solid fa-cart-plus text-dark m-2'></i>
            <MDBBadge color='danger' light pill className='position-absolute translate-middle'>
          {cart.length}
          <span class="visually-hidden">unread messages</span>
        </MDBBadge> 
            </Nav.Link>
            </Link>

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default Header