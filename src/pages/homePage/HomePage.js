import TopicCard from '../../components/topicCard/TopicCard';
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
          <div>solinis blokas</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
