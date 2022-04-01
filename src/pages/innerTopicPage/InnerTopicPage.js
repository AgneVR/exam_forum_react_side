import CommentCard from '../../components/commentCard/CommentCard';
import InnerTopicCard from '../../components/innerTopicCard/InnerTopicCard';
import PostMessageInTopicCard from '../../components/postMessageInTopicCard/PostMessageInTopicCard';
import PaginationGlobal from '../../components/pagination/PaginationGlobal';
import './InnerTopicPage.scss';

const InnerTopicPage = () => {
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
          <div className='mb-2'>
            <PostMessageInTopicCard />
          </div>
          <PaginationGlobal />
        </div>
        <div className='col-lg-4'>another boxes</div>
      </div>
    </div>
  );
};

export default InnerTopicPage;
