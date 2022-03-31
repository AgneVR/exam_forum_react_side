import UserProfileHeader from '../../components/userProfileHeader/UserProfileHeader';
import CommentCard from '../../components/commentCard/CommentCard';

const UserProfileCommentsPage = () => {
  return (
    <div className='container mt-50'>
      <UserProfileHeader />
      <div className='row mt-4'>
        <div className='col-lg-6'>
          <CommentCard />
        </div>
        <div className='col-lg-6'>
          <CommentCard />
        </div>
        <div className='col-lg-6'>
          <CommentCard />
        </div>
        <div className='col-lg-6'>
          <CommentCard />
        </div>
      </div>
    </div>
  );
};

export default UserProfileCommentsPage;
