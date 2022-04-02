import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faClock, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TopicCard.scss';

const TopicCard = ({ el, onFavChange, isInFavPage }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    isInFavourite();
  }, []);

  const normalDate = () => {
    let currentDate = new Date();
    let myDate = new Date(el.createdAt);
    let diffTime = currentDate.getTime() - myDate.getTime();
    let diffSec = diffTime / 1000;
    let diffMinutes = diffTime / (1000 * 60);
    let diffHours = diffTime / (1000 * 60 * 60);
    let diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays >= 1) {
      return `${Math.floor(diffDays)} d`;
    } else if (diffHours >= 1) {
      return `${Math.floor(diffHours)} h`;
    } else if (diffMinutes >= 1) {
      return `${Math.floor(diffMinutes)} min`;
    } else if (diffSec >= 1) {
      return `${Math.floor(diffSec)} s`;
    }
  };

  const isInFavourite = () => {
    let favouriteTopics = localStorage.getItem('favouriteTopics');
    if (favouriteTopics !== null) {
      let favouriteTopicsArr = JSON.parse(favouriteTopics);
      let topicIndex = favouriteTopicsArr.findIndex((item) => item._id === el._id);
      if (topicIndex === -1) {
        setIsFavourite(false);
      } else {
        setIsFavourite(true);
      }
    } else {
      setIsFavourite(false);
    }
  };

  const onFavouriteHandler = () => {
    let favouriteTopics = localStorage.getItem('favouriteTopics');
    if (favouriteTopics !== null) {
      let favouriteTopicsArr = JSON.parse(favouriteTopics);
      let topicIndex = favouriteTopicsArr.findIndex((item) => item._id === el._id);
      console.log(topicIndex);
      if (topicIndex === -1) {
        favouriteTopicsArr.push(el);
        localStorage.setItem('favouriteTopics', JSON.stringify(favouriteTopicsArr));
        setIsFavourite(true);

        if (onFavChange) {
          onFavChange(el);
        }
      } else {
        const leftInFavourites = favouriteTopicsArr.filter((item, i) => i !== topicIndex);
        localStorage.setItem('favouriteTopics', JSON.stringify(leftInFavourites));
        setIsFavourite(false);

        if (onFavChange) {
          onFavChange(el);
        }
      }
    } else {
      let favouriteTopicsArr = [];
      favouriteTopicsArr.push(el);
      localStorage.setItem('favouriteTopics', JSON.stringify(favouriteTopicsArr));
      setIsFavourite(true);

      if (onFavChange) {
        onFavChange(el);
      }
    }
  };

  return (
    <div className='topic-card-container d-flex align-items-center justify-content-between align-items-center w100'>
      <div className='main-part d-flex'>
        <div className='user-img mr-20 d-flex justify-content-center align-items-center flex-column'>
          <img src={el.user && el.user.imageUrl} alt='' className='mb-3' />
          <FontAwesomeIcon
            onClick={onFavouriteHandler}
            icon={faHeart}
            className={`topic-heart ${
              isFavourite === true || (isInFavPage && isInFavPage === true) ? 'favouriteFopic' : ''
            }`}
          />
        </div>

        <div className='mr-20'>
          <Link to={`/topics/${el._id}`}>{el.title}</Link>
          <p>{el.shortDescription}</p>
        </div>
      </div>
      <div className='icons-part d-flex flex-column align-items-center'>
        <div className='comments'>
          <div className='comment-bg'>
            {el.commentsCount ? el.commentsCount : 0}
            <div className='mark'></div>
          </div>
        </div>
        <div className='views'>
          <FontAwesomeIcon icon={faEye} className='mr-4' />
          <span>{el.viewsCount ? el.viewsCount : 0}</span>
        </div>
        <div className='time'>
          <FontAwesomeIcon icon={faClock} className='mr-4' />
          <span>{normalDate()}</span>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
