import { useState, useEffect } from 'react';
import TopicCard from '../../components/topicCard/TopicCard';

const FavouritesPage = () => {
  const [favouriteTopics, setFavouriteTopics] = useState([]);
  const [favChange, setFavChange] = useState(null);

  useEffect(() => {
    let favTopics = localStorage.getItem('favouriteTopics');

    if (favTopics !== null) {
      setFavouriteTopics([...JSON.parse(favTopics)]);
    }
  }, [favChange]);

  return (
    <div className='container mt-50'>
      <div className='row'>
        {favouriteTopics && favouriteTopics.length > 0 ? (
          favouriteTopics.map((el, i) => (
            <div className='col-lg-6 d-flex' key={i}>
              <TopicCard isInFavPage={true} onFavChange={setFavChange} el={el} />
            </div>
          ))
        ) : (
          <p>There is none fovourite topics</p>
        )}
      </div>
    </div>
  );
};

export default FavouritesPage;
