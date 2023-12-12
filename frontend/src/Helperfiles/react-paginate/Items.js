import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination'; // Import the Pagination component

// Example items, to simulate fetching from another resource.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item}>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

const PaginatedItems = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      {/* Use the Pagination component */}
      <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
    </>
  );
};

// Export the PaginatedItems component using module.exports
module.exports = PaginatedItems;
