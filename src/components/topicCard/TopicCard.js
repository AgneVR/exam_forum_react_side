import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faClock, faHeart } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import './TopicCard.scss';

const TopicCard = ({ divClassName, el }) => {
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

  return (
    <div className='topic-card-container d-flex align-items-center justify-content-between align-items-center'>
      <div className='main-part d-flex'>
        <div className='user-img mr-20 d-flex justify-content-center align-items-center flex-column'>
          <img src={el.user.imageUrl && el.user.imageUrl} alt='' className='mb-3' />
          <FontAwesomeIcon
            icon={faHeart}
            className={`topic-heart ${divClassName ? divClassName : ''}`}
          />
        </div>

        <div className='mr-20'>
          <Link to='/topics/:topicID'>{el.title}</Link>
          <p>{el.shortDescription}</p>
        </div>
      </div>
      <div className='icons-part'>
        <div className='comments'>
          <div className='comment-bg'>
            {el.commentsCount}
            <div className='mark'></div>
          </div>
        </div>
        <div className='views'>
          <FontAwesomeIcon icon={faEye} className='mr-4' />
          <span>1.200</span>
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
