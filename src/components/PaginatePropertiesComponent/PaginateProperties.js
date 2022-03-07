import React from 'react';
import ReactPaginate from 'react-paginate';
import './paginateProperties.scss';

export default function PaginateProperties({
  changePage,
  pageCount,
  filteredUser,
  pageNumber,
}) {
  return (
    <div>
      <ReactPaginate
        nextLabel={'Next'}
        previousLabel={'Previous'}
        user={filteredUser}
        pageCount={pageCount}
        // forcePage={pageNumber}
        onPageChange={changePage}
        nextLinkClassName="nextBtn"
        containerClassName="paginationBtns"
        previousLinkClassName="previousBtn"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </div>
  );
}
