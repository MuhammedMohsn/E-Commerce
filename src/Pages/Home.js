import React, { Fragment, useEffect } from 'react'
import HotDeals from '../Components/HotDeals'
import Loading from '../Components/Loading'
import Who from '../Components/Who'
import CarouselComponent from '../Components/Carousel'
import { getProducts } from '../api'

function Home({ setProducts, products, loading, setLoading, inputSearch }) {

  useEffect(() => {
    getProducts().then((productsData) => {
      setLoading(false);
      setProducts(productsData);
    });
  }, []);
  useEffect(() => {
    getProducts().then((productsData) => {
      setLoading(false);
      setProducts(productsData);
    });
  }, [inputSearch, setLoading, setProducts]);
  return (
    <Fragment>
      <CarouselComponent />
      <Who />
      {loading ? <Loading /> : <HotDeals products={products} setProducts={setProducts} setLoading={setLoading} />}
    </Fragment >
  )
}

export default Home