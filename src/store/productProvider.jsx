import axios from 'axios';
import { useEffect, useState } from 'react';
import  ProductContext  from './productContext';
const ProductProvider = (props) => {
  const baseURL = 'https://dummyjson.com';
  const [product, setProduct] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(baseURL + '/products?limit=100').then((response) => {
      setProduct(response.data.products);
    });
    axios.get(baseURL + '/posts').then((response) => {
      setPosts(response.data.posts);
  });
}, []);
  const productContext = {
    products: product,
    posts:posts
  };
  return <ProductContext.Provider value={productContext}>{props.children}</ProductContext.Provider>;
};
export default ProductProvider;
