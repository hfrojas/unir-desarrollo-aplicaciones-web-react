import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ currentPage }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/api-test">Api test</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {currentPage}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
