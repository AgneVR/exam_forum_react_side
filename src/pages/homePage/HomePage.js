import TopicCard from '../../components/topicCard/TopicCard';
import MostReadableTopicsCard from '../../components/mostReadableTopicsCard/MostReadableTopicsCard';
import MostPopularTopicsCard from '../../components/mostPopularTopicsCard/MostPopularTopicsCard';
import RecentTopicsCard from '../../components/recentTopicsCard/RecentTopicsCard';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='container mt-50'>
      <div className='row'>
        <div className='col-lg-8'>
          <TopicCard divClassName='favouriteFopic' />
          <TopicCard />
          <TopicCard />
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

export default HomePage;
