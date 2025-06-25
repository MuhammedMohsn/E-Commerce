import React, { Fragment, useContext, useState, useEffect } from "react";
import Context from "../Context";
import { Link } from "react-router-dom";
import styles from "../CSS_modules/Navbar.module.css";
import {
  Button,
  Container,
  Form,
  NavDropdown,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { getCategories, getProducts } from "../api";
// this component used in all components
const NavBar = () => {
  let [loading, setLoading] = useState(true);
  let {
    products,
    setProducts,
    categories,
    setCategories,
    inputSearch,
    setInputSearch,
  } = useContext(Context);
  let quantity = useSelector((state) => {
    return state.cart.quantity;
  });
  // get categories from API after the navbar is mounted
  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    if (inputSearch) {
      setProducts(
        products.filter((product) => {
          return product.title
            .toLowerCase()
            .includes(inputSearch.toLowerCase());
        })
      );
    } else {
      // to get all products if input search is empty
      getProducts().then((products) => {
        setProducts(products);
      });
    }
  }, [inputSearch]);
  return (
    <Fragment>
      <Navbar expand="lg" className="sticky-top">
        <Container fluid>
          <Navbar.Brand className={styles.siteName}>inStock</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} className={styles.navLink} to="">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className={styles.navLink} to="HotDeals">
                Hot Deals
              </Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                {loading ? (
                  <div>loading....</div>
                ) : (
                  categories.map((category, i) => {
                    return (
                      <NavDropdown.Item key={i}>
                        <Link
                          className={`${styles.navLink} me-3`}
                          to={`categories/${category}`}
                        >
                          {category}
                        </Link>
                      </NavDropdown.Item>
                    );
                  })
                )}
              </NavDropdown>
            </Nav>
            <Form
              className="d-flex"
              onSubmit={(event) => {
                event.preventDefault();
                let searchedProducts = products.filter((product) => {
                  return product.title
                    .toLowerCase()
                    .includes(inputSearch.toLowerCase());
                });
                setProducts(searchedProducts);
              }}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className={`me-2 ${styles.searchInput}`}
                aria-label="Search"
                onChange={(event) => {
                  setInputSearch(event.target.value);
                }}
              />
              <Button
                className={styles.searchBtn}
                variant="outline-success"
                type="submit"
              >
                Search
              </Button>
            </Form>
            <Link to="/cart" className={styles.navLink}>
              <div className=" d-flex align-items-center position-relative">
                <span className={styles.cartIcon}>&#x1F6D2;</span>
                <span className={styles.iconCount}>{quantity}</span>
              </div>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};
export default NavBar;
