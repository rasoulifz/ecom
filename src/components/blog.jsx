import React, { useContext, useEffect, useState } from 'react';
import { ForthCard } from './forthCard';
import { Pagination } from './pagination';
import Paginat from './util/paginat';
import ProductContext from '../store/productContext';

export default function Blog() {
  const postCtx = useContext(ProductContext);
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setPosts(postCtx.posts);
    setCount(postCtx.posts.length);
  }, [postCtx.posts]);
  const hanlePageChange = (page) => {
    setCurrentPage(page);
  };
  const postList = Paginat(posts, currentPage, 4);
  return (
    <>
      <div className="container">
        <div className="row">
          {postList.map((post) => (
            <ForthCard
              key={post.id}
              post={post}
              image={'https://picsum.photos/id/' + post.id + '/400/200'}
            ></ForthCard>
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
}
