import styled from "styled-components";
import { popularProducts } from "../data";
import { useEffect, useState } from "react";
import axios from 'axios'
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;




const Products = () => {
const [products, setProducts] = useState([])

  const getProducts = async() => {
    try{
      const res = await axios.get('http://localhost:5000/api/products')
      setProducts(res.data)
    }
    catch(error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getProducts()
  }, [])


  return (
    <Container>
      {products.map((item) => (
        <Product item = {item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
