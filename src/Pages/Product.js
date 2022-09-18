import React, { Fragment, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getProducts } from '../api'
import { Link, useParams } from 'react-router-dom'
import Loading from '../Components/Loading'
import styles3 from '../CSS_modules/Product.module.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../Redux/CartReducer'
function Product({ setProducts, products, loading, setLoading,inputSearch }) {
  let dispatch = useDispatch();
  useEffect(() => {
    getProducts().then((productsData) => {
      setLoading(false);
      setProducts(productsData);
    })
  }, []);

  let { id } = useParams();
  let product = products.find(product => product.id === parseInt(id))
  let { title, price, description, image, rating } = product
  let { count, rate } = rating;
  let similarProducts = products.filter(prodct => prodct.id !== parseInt(id) && (prodct.category===product.category)).slice(0, 3)
  return (
    <Fragment>
      <Container>
        {loading ? <Loading /> : (<Fragment>

          <Row className="justify-content-between align-items-center">
            <Col xs="5">
              <img src={image} alt={title} className="w-100 h-100" />
            </Col>
            <Col xs="7" className="ps-4">
              <h2 style={{ textAlign: 'left' }} className="mb-3">{title}</h2>
              <p style={{ textAlign: 'left', fontWeight: 'bolder' }} >$ {price}</p>
              <div className="justify-content-between align-items-center d-flex w-100 m-auto mb-3">
                <div> <span className="text-success">&#9733;</span> {rate}</div>
                <div>{count} Reviews</div>
              </div>

              <div className="mb-3">{description}</div>
              <div className="w-100 justify-content-between align-items-center d-flex">
                <Button variant="primary" className="me-3"
                  onClick={() => { dispatch(addProduct({ product, price })) }}>Add to cart</Button>
                <Link to="/" style={{ textDecoration: "none" }}> <Button variant="primary" className="text-center">Back to Home</Button>
                </Link>
              </div>

            </Col>
          </Row>
          <hr />
          <hr />

          <h1 className="w-100 m-auto mb-4">Similar Products</h1>
          <Row className="justify-content-between align-items-center d-flex">
            {similarProducts.filter((product)=>{return product.title.includes(inputSearch)}).map((product) => {
              let { id, title, price, image } = product
              return (
                <Col key={id} xs="4" style={{ cursor: "pointer", height: "500px" }} >
                  <Link to={`/products/${product.id}`} className="text-white" style={{ textDecoration: "none" }}>
                    <img src={image} alt={title} className={`w-75 h-50 ${styles3.product_img}`} />
                    <div className="justify-content-around align-items-center d-flex w-100">
                      <p>{title.slice(0, 10)}</p>
                      <p>$ {price}</p>
                    </div>
                  </Link>
                </Col>)
            })}</Row>

        </Fragment>)}</Container>
    </Fragment>
  )
}

export default Product;