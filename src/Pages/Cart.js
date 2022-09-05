import React, { Fragment } from 'react'
import { Row, Col, Button, CloseButton } from 'react-bootstrap'
import styles from '../CSS_modules/Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { delProduct } from '../Redux/CartReducer'
function Cart() {
  let quantity = useSelector(state => { return state.cart.quantity })
  let cartProducts = useSelector(state => { return state.cart.products })
  let total = useSelector(state => { return state.cart.total })
  let dispatch = useDispatch()
  let deletehandler = (id) => {
    dispatch(delProduct(id))
  }
  return (
    <Fragment>
      <h1 className={`text-start mb-4 ps-4 ${styles.cart_header}`}>Shopping Cart</h1>
      <hr />
      <Row className="justify-content-between ">
        <Col xs="12" md="7" >
          {quantity > 0 ?
            cartProducts.map((product) => {
              let { id, title, image } = product
              return (<Row key={id}>
                <Col xs="3"><img src={image} style={{ width: "80%", height: "100%" }} alt={title} /></Col>
                <Col xs="7"><p>{title}</p></Col>
                <Col xs="2"><CloseButton className="bg-danger" onClick={() => { deletehandler(id) }} /></Col>
                <hr />
              </Row>)
            })
            : <h1>empty Cart...</h1>}
          <hr />
        </Col>
        <Col xs='12' md="5">
          <h3>Order Summary</h3>
          <div className=' ps-3 d-flex align-items-center justify-content-between'><p>Subtotal</p><p>${parseInt(total)}</p></div>
          <div className=' ps-3 d-flex align-items-center justify-content-between'><p>Shipping estimate</p><p>$0</p></div>
          <div className='ps-3 d-flex align-items-center justify-content-between'><p>Tax estimate</p><p>$0</p></div>
          <div className='ps-3 d-flex align-items-center justify-content-between'><p>Order Total</p><p>$0</p></div>
          <div className='ps-3 d-flex align-items-center justify-content-between'><p>Subtotal</p><p>${parseInt(total)}</p></div>
          <Button variant="primary" className="w-100 text-center rounded">Check Out</Button>
        </Col>
      </Row>

    </Fragment>
  )
}

export default Cart
