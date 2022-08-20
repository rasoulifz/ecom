import React, { useEffect, useState, useContext, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../store/productContext';
import classes from './detailPost.module.css';

export const DetailPost = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [item, setItem] = useState({});
  const [tags, setTags] = useState([]);
  const productCtx = useContext(ProductContext);

  useEffect(() => {
    setPosts(productCtx.posts);
    if (posts.length !== 0) {
      setItem(posts.find((element) => +element.id === +id));
    }
  }, [productCtx.posts]);
  useEffect(() => {
    if (item) {
      console.log(item.tags);
      setTags(item.tags);
    }
  }, [item]);

  return (
    <Fragment>
      <section className={classes.logistics}>
        <div className={classes.topItem}>
          <div className={classes.image}>
            <img src={'https://picsum.photos/id/' + id + '/400/200'} />
          </div>
          <div className={classes.summary}>
            <h1>{item.title}</h1>
            {tags && (
              <ul className={classes.list}>
                {tags.map((tag) => (
                  <li className={classes.listItem} key={tag}>{tag}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <section className={classes.content}>{item.body}</section>
      </section>
    </Fragment>
  );
};
