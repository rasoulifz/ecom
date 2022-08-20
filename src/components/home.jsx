import React, { useContext, useEffect, useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShippingFast,
  faLock,
  faRedoAlt,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faPinterest,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import Card from './card';
import SecondCard from './secondCard';
import ThirdCard from './thirdCard';
import ProductContext from '../store/productContext';

export default function Home() {
  const productCtx = useContext(ProductContext);

  const [product, setProduct] = useState([]);
  const [AProduct, setAProduct] = useState([]);
  const [posts, setPosts] = useState([]);
  const min = 1;
  const max = 99;
  const maxPost = 29;
  const rand = min + Math.random() * (max - min);
  const randTow = min + Math.random() * (max - min);
  const randThree = min + Math.random() * (maxPost - min);

  useEffect(() => {
    setProduct(productCtx.products.slice(rand, rand + 4));
    setAProduct(productCtx.products.slice(randTow, randTow + 6));
    // axios.get(baseURL + '/products').then((response) => {
    //   setProduct(response.data.products.slice(rand, rand + 4));
    //   setAProduct(response.data.products.slice(randTow, randTow + 6));
    // });
  }, [productCtx.products]);
  useEffect(() => {
    setPosts(productCtx.posts.slice(randThree, randThree + 3));
  }, [productCtx.posts]);

  return (
    <>
      <div className="banner">
        <div className="rows">
          <div className="col container">
            <div className="content">
              <h3>upto 75% off</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                deserunt nostrum accusamus. Nam alias sit necessitatibus,
                aliquid ex minima at!
              </p>
              <a href="#" className="btn">
                shop now
              </a>
            </div>
          </div>
          <div className="col image-banner justify-content-center;">
            <img src="./image/banner-item.png" alt="" />
          </div>
        </div>
      </div>
      <div className="iconsContainer">
        <div className="icons">
          <FontAwesomeIcon
            color="#30944e"
            size="3x"
            icon={faShippingFast}
            className="iconsize"
          ></FontAwesomeIcon>
          <div className="content">
            <h3>free shipping</h3>
            <p>order over $100</p>
          </div>
        </div>
        <div className="icons">
          <FontAwesomeIcon
            color="#30944e"
            size="3x"
            icon={faLock}
            className="iconsize"
          ></FontAwesomeIcon>
          <div className="content">
            <h3>secure payment</h3>
            <p>100 secure payment</p>
          </div>
        </div>

        <div className="icons">
          <FontAwesomeIcon
            color="#30944e"
            size="3x"
            icon={faRedoAlt}
            className="iconsize"
          ></FontAwesomeIcon>
          <div className="content">
            <h3>easy returns</h3>
            <p>10 days returns</p>
          </div>
        </div>

        <div className="icons">
          <FontAwesomeIcon
            color="#30944e"
            size="3x"
            icon={faHeadset}
            className="iconsize"
          ></FontAwesomeIcon>
          <div className="content">
            <h3>24/7 support</h3>
            <p>call us anytime</p>
          </div>
        </div>
      </div>
      <div className="featured-books container">
        <h3 className="heading">
          {' '}
          <span>featured products</span>{' '}
        </h3>
        <div className="contaier">
          <div className="row">
            {product.map((pr) => (
              <Card key={pr.id} product={pr}></Card>
            ))}
          </div>
        </div>
      </div>
      <div className="newsletter">
        <form action="">
          <h3>subscribe for latest updates</h3>
          <input
            type="email"
            name=""
            placeholder="enter your email"
            id=""
            className="box"
          />
          <input type="submit" value="subscribe" className="btn" />
        </form>
      </div>
      <div className="arrival-books">
        <h1 className="heading">
          {' '}
          <span>arrival products</span>{' '}
        </h1>
        <div className="container">
          <div className="row">
            {AProduct.map((pr) => (
              <SecondCard key={pr.id} product={pr}></SecondCard>
            ))}
          </div>
        </div>
      </div>
      <div className="deal ">
        <div className="content">
          <h3>deal of the day</h3>
          <h1>upto 50% off</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            perspiciatis in atque dolore tempora quaerat at fuga dolorum natus
            velit.
          </p>
          <a className="btn">shop now</a>
        </div>

        <div className="image">
          <img src="image/deal-img.jpg" alt="" />
        </div>
      </div>
      <div className="blogs ">
        <h1 className="heading">
          {' '}
          <span>Our Blogs</span>{' '}
        </h1>
        <div className="container">
          <div className="row">
            {posts.map((post) => (
              <ThirdCard
                key={post.id}
                post={post}
                image={'https://picsum.photos/id/' + post.id + '/400/200'}
              ></ThirdCard>
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>
        </a>
      </div>
      <div className="credit">
        {' '}
        created by <span>Fz Rs</span> | all rights reserved!{' '}
      </div>
    </>
  );
}
