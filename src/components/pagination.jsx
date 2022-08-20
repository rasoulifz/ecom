import React from 'react';
import _ from 'lodash';

export const Pagination = ({ count, pageSize, onPageChange, currentPage }) => {
  const pageCounts = Math.ceil(count / pageSize);

  if (pageCounts === 1 || pageCounts === 0) return null;
  const pages = _.range(1, pageCounts + 1);

  return (
    <>
      <nav>
        <ul className="pagination container justify-content-center">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? 'page-item active' : 'page-item'
              }
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
