import React, { useContext, useEffect, useState } from 'react';
import ProductContext from '../store/productContext';
import Card from './card';
import { Pagination } from './pagination';
import Paginat from './util/paginat';

export const Home_Decoration = () => {
  const [lists, setLists] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const listsCtx = useContext(ProductContext);

  useEffect(() => {
    setLists(
      listsCtx.products.filter(
        (item) => item.category === 'home-decoration' || item.category === 'furniture'
      )
    );
    setCount(
      listsCtx.products.filter(
        (item) => item.category === 'home-decoration' || item.category === 'furniture'
      ).length
    );
  }, [listsCtx.products]);

  const hanlePageChange = (page) => {
    setCurrentPage(page);
  };
  const newList = Paginat(lists, currentPage, 4);
  return (
    <>
      <div className="container mb-5 mt-5">
        <div className="row">
          {newList.map((product) => (
            <Card key={product.id} product={product}></Card>
          ))}
        </div>
      </div>
      <Pagination
        count={count}
        pageSize={4}
        onPageChange={hanlePageChange}
        currentPage={currentPage}
      ></Pagination>
    </>
  );
};
