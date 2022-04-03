import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import CommentCard from '../../components/commentCard/CommentCard';
import InnerTopicCard from '../../components/innerTopicCard/InnerTopicCard';
import PostMessageInTopicCard from '../../components/postMessageInTopicCard/PostMessageInTopicCard';
import StatisticsBar from '../../components/statisticsBar/StatisticsBar';
import PaginationGlobal from '../../components/pagination/PaginationGlobal';
import http from '../../plugins/http';

const InnerTopicPage = () => {
  const [singleTopic, setSingleTopic] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsTotal, setCommentsTotal] = useState(0);
  const [comments, setComments] = useState([]);
  const [onCommentCreate, setOnCommentCreate] = useState(null);
  const [lastPage, setLastPage] = useState(1);
  let currentUser = useSelector((state) => state.user.user);

  const location = useLocation();
  const goToPage = useNavigate();

  const { topicID } = useParams();

  useEffect(() => {
    http.get(`topics/${topicID}`).then((res) => {
      if (res.success) {
        setSingleTopic(res.topic);
      }
    });
  }, [topicID]);

  useEffect(() => {
    http.get(`all-topic-comments/${topicID}/${currentPage}`).then((res) => {
      if (res.success) {
        setComments(res.topicComments);
        setCommentsTotal(res.totalCommentsCount);
        setLastPage(res.lastPage);
      }
    });
  }, [onCommentCreate, currentPage, topicID]);

  useEffect(() => {
    const search = location.search;
    const page = new URLSearchParams(search).get('page');
    if (page !== undefined && page !== null) {
      setCurrentPage(Number(page));
    } else {
      setCurrentPage(1);
    }
  }, [location]);

  const onCreateComment = (res) => {
    if (currentPage === lastPage) {
      setOnCommentCreate(res);
    } else {
      setCurrentPage(lastPage);
    }
  };
  const handlePageChange = (newActivePage) => {
    setCurrentPage(newActivePage);
    goToPage(`/topics/${topicID}?page=${newActivePage}`);
  };

  return (
    <div className='container mt-50'>
      <div className='row'>
        <div className='col-lg-8'>
          {singleTopic !== null && <InnerTopicCard singleTopic={singleTopic} />}
          <h5 className='mb-5 mt-5'>Comments</h5>
          {comments && comments.length > 0 ? (
            comments.map((el, i) => <CommentCard el={el} key={i} />)
          ) : (
            <p>No comments found</p>
          )}
          {commentsTotal && commentsTotal > 10 ? (
            <PaginationGlobal
              activePage={currentPage}
              totalItemsCount={commentsTotal}
              handlePageChange={handlePageChange}
            />
          ) : (
            ''
          )}
          {currentUser !== null && singleTopic !== null && (
            <div className='mb-2'>
              <PostMessageInTopicCard onCreateComment={onCreateComment} singleTopic={singleTopic} />
            </div>
          )}
        </div>
        <div className='col-lg-4'>
          <StatisticsBar />
        </div>
      </div>
    </div>
  );
};

export default InnerTopicPage;
