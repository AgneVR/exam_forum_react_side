import TopicCard from '../../components/topicCard/TopicCard';
import { useState, useEffect } from 'react';
import './FavouritesPage.scss';

const FavouritesPage = () => {
  const [favouriteTopics, setFavouriteTopics] = useState([]);
  const [favChange, setFavChange] = useState(null);

  useEffect(() => {
    let favTopics = localStorage.getItem('favouriteTopics');
    console.log('TTT');
    if (favTopics !== null) {
      setFavouriteTopics([...JSON.parse(favTopics)]);
    }
  }, [favChange]);

  return (
    <div className='container mt-50'>
      <div className='row'>
        {favouriteTopics &&
          favouriteTopics.map((el, i) => (
            <div className='col-lg-6' key={i}>
              <TopicCard isInFavPage={true} onFavChange={setFavChange} el={el} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
