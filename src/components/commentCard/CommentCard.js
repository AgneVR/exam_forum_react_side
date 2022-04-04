import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
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
    <div className='topic-card-container inner-Card comment w100'>
      <div className='d-flex com-card'>
        <div className='user-img mr-20'>
          <img src={el.user && el.user.imageUrl} alt='' className='mb-3' />
        </div>
        <div className='mr-20'>
          <div
            style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}
            dangerouslySetInnerHTML={{ __html: el.comment }}
          />
          <div className='time mt-3'>
            <FontAwesomeIcon icon={faUser} className='mr-4' />
            Posted by: <b>{el.user && el.user.username}</b>
          </div>
          <div className='time'>
            <FontAwesomeIcon icon={faClock} className='mr-4' />
            <span>{normalDate()} ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
