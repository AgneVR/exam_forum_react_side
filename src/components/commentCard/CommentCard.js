import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './CommentCard.scss';

const CommentCard = ({ el }) => {
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
    } else if (diffSec >= 0) {
      return `${Math.floor(diffSec)} s`;
    }
  };

  return (
    <div className='topic-card-container inner-Card comment'>
      <div className='d-flex'>
        <div className='user-img mr-20'>
          <img src={el.user && el.user.imageUrl} alt='' className='mb-3' />
        </div>
        <div className='mr-20'>
          <p>{el.comment}</p>
          <div className='time'>
            <FontAwesomeIcon icon={faClock} className='mr-4' />
            <span>Posted on : {normalDate()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
