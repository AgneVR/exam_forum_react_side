import TopicCard from '../../components/topicCard/TopicCard';
import './FavouritesPage.scss';

const FavouritesPage = () => {
  return (
    <div className='container mt-50'>
      <div className='row'>
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

export default FavouritesPage;
