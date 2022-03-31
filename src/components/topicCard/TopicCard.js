import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faClock, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './TopicCard.scss';

const TopicCard = ({ divClassName }) => {
  let currentUser = useSelector((state) => state.user.user);
  return (
    <div className='topic-card-container d-flex align-items-center'>
      <div className='user-img mr-20 d-flex justify-content-center align-items-center flex-column'>
        <img src={currentUser && currentUser.imageUrl} alt='' className='mb-3' />
        <FontAwesomeIcon
          icon={faHeart}
          className={`topic-heart ${divClassName ? divClassName : ''}`}
        />
      </div>
      <div className='mr-20'>
        <Link to='/topics/:topicID'>10 Kids Unaware of Their Halloween Costume</Link>
        <p>
          It's one thing to subject yourself to a Halloween costume mishap because, hey, that's your
          prerogative.
        </p>
      </div>
      <div>
        <div className='comments'>
          <div className='comment-bg'>
            560
            <div className='mark'></div>
          </div>
        </div>
        <div className='views'>
          <FontAwesomeIcon icon={faEye} className='mr-4' />
          <span>1.200</span>
        </div>
        <div className='time'>
          <FontAwesomeIcon icon={faClock} className='mr-4' />
          <span>15 min</span>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
