import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import './CommentCard.scss';

const CommentCard = () => {
  let currentUser = useSelector((state) => state.user.user);
  return (
    <div className='topic-card-container inner-Card comment'>
      <div className='d-flex'>
        <div className='user-img mr-20'>
          <img src={currentUser && currentUser.imageUrl} alt='' className='mb-3' />
        </div>
        <div className='mr-20'>
          <p>
            Today, we're looking at three particularly interesting stories. Pinterest added a new
            location-based feature on Wednesday that uses Place Pins as a way to map out vacations
            and favorite areas. Southwest Airlines is providing Wi-Fi access from gate to gate for
            $8 per day through an onboard hotspot. And in an effort to ramp up its user base, Google
            Wallet is offering a debit card that can take out cash from.
          </p>
          <div className='time'>
            <FontAwesomeIcon icon={faClock} className='mr-4' />
            <span>Posted on : 20 Nov @ 9:30am</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
