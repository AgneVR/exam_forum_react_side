import UserProfileHeader from '../../components/userProfileHeader/UserProfileHeader';
import TopicCard from '../../components/topicCard/TopicCard';
import './UserProfilePage.scss';

const UserProfilePage = () => {
  return (
    <div className='container mt-50'>
      <UserProfileHeader />
      <div className='row mt-4'>
        <div className='col-lg-6'>
          <TopicCard />
        </div>
        <div className='col-lg-6'>
          <TopicCard />
        </div>
        <div className='col-lg-6'>
          <TopicCard />
        </div>
        <div className='col-lg-6'>
          <TopicCard />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
