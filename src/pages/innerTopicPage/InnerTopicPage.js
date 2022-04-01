import CommentCard from '../../components/commentCard/CommentCard';
import InnerTopicCard from '../../components/innerTopicCard/InnerTopicCard';
import PostMessageInTopicCard from '../../components/postMessageInTopicCard/PostMessageInTopicCard';
import PaginationGlobal from '../../components/pagination/PaginationGlobal';
import RecentTopicsCard from '../../components/recentTopicsCard/RecentTopicsCard';
import MostPopularTopicsCard from '../../components/mostPopularTopicsCard/MostPopularTopicsCard';
import MostReadableTopicsCard from '../../components/mostReadableTopicsCard/MostReadableTopicsCard';
import { useSelector } from 'react-redux';

import './InnerTopicPage.scss';

const InnerTopicPage = () => {
  let currentUser = useSelector((state) => state.user.user);

  return (
    <div className='container mt-50'>
      <div className='row'>
        <div className='col-lg-8'>
          <InnerTopicCard />
          <h5 className='mb-5 mt-5'>Comments</h5>
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          {currentUser !== null && (
            <div className='mb-2'>
              <PostMessageInTopicCard />
            </div>
          )}

          <PaginationGlobal />
        </div>
        <div className='col-lg-4'>
          <div className='mb-3'>
            <RecentTopicsCard />
          </div>
          <div className='mb-3'>
            <MostPopularTopicsCard />
          </div>
          <div className='mb-3'>
            <MostReadableTopicsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerTopicPage;
