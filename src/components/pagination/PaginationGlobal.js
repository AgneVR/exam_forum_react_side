import Pagination from 'react-js-pagination';
import './PaginationGlobal.scss';

const PaginationGlobal = () => {
  const handlePageChange = () => {};

  return (
    <div className='d-flex justify-content-center'>
      <Pagination
        activePage={2}
        itemsCountPerPage={10}
        totalItemsCount={10}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass='page-item'
        hideFirstLastPages={true}
        nextPageText='Next'
        prevPageText='Previous'
        hideDisabled={true}
      />
    </div>
  );
};

export default PaginationGlobal;
