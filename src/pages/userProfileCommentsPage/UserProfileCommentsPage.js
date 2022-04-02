import UserProfileHeader from '../../components/userProfileHeader/UserProfileHeader';
import CommentCard from '../../components/commentCard/CommentCard';
import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import http from '../../plugins/http';
import PaginationGlobal from '../../components/pagination/PaginationGlobal';

const UserProfileCommentsPage = () => {
  const [myComments, setMyComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsTotal, setCommentsTotal] = useState(0);

  const location = useLocation();
  const goToPage = useNavigate();

  useEffect(() => {
    http.get(`my-comments/${currentPage}`).then((res) => {
      if (res.success) {
        setMyComments(res.myComment);
        setCommentsTotal(res.myCommentsAll);
        console.log(res);
      } else {
        console.log(res);
      }
    });
  }, [currentPage]);

  useEffect(() => {
    const search = location.search;
    const page = new URLSearchParams(search).get('page');
    if (page !== undefined && page !== null) {
      setCurrentPage(Number(page));
    } else {
      setCurrentPage(1);
    }
  }, [location]);

  const handlePageChange = (newActivePage) => {
    setCurrentPage(newActivePage);
    goToPage(`/user-profile/comments?page=${newActivePage}`);
  };

  return (
    <div className='container mt-50'>
      <UserProfileHeader />
      <div className='row mt-4'>
        {myComments && myComments.length > 0 ? (
          myComments.map((el, i) => (
            <div className='col-lg-6 d-flex' key={i}>
              <CommentCard el={el} />
            </div>
          ))
        ) : (
          <p>No comments found</p>
        )}
        <PaginationGlobal
          activePage={currentPage}
          totalItemsCount={commentsTotal}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default UserProfileCommentsPage;
