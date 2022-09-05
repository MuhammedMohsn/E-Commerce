import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from '../CSS_modules/Navbar.module.css'
import { Button, Container, Form, NavDropdown, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux'
const NavBar = ({ categories, inputSearch, setInputSearch, products, setProducts }) => {
    let quantity = useSelector(state => { return state.cart.quantity })
    return (
        <Fragment>
            <Navbar expand="lg">
                <Container fluid >
                    <Navbar.Brand className={styles.siteName}>inStock</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} className={styles.navLink} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} className={styles.navLink} to="/HotDeals">
                                Hot Deals
                            </Nav.Link>
                            <NavDropdown title="Categories" id="navbarScrollingDropdown">
                                {categories.map((category, i) => {
                                    return <NavDropdown.Item key={i}>
                                        <Link className={`${styles.navLink} me-3`} to={`/categories/${category}`}>{category}</Link>
                                    </NavDropdown.Item>
                                })}
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex"
                            onSubmit={(event) => {
                                event.preventDefault();
                                let searchedProducts = products.filter((product => { return product.title === inputSearch }))
                                setProducts(searchedProducts)
                            }}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className={`me-2 ${styles.searchInput}`}
                                aria-label="Search"
                                onChange={(event) => {
                                    setInputSearch(event.target.value)
                                    let searchedProducts;
                                    if (event.target.value.length > 0) {
                                        searchedProducts = products.filter(product => product.title.includes(inputSearch))
                                        setProducts(searchedProducts)
                                    }
                                }}
                            />
                            <Button className={styles.searchBtn} variant="outline-success"
                            >Search</Button>
                        </Form>
                        <Link to="/cart" className={styles.navLink} >
                            <div className=" d-flex align-items-center position-relative">
                                <span className={styles.cartIcon} >&#x1F6D2;</span>
                                <span className={styles.iconCount}>{quantity}</span>
                            </div>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar></Fragment>
    )
}

export default NavBar




