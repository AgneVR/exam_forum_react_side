import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './InnerTopicCard.scss';

const InnerTopicCard = ({ singleTopic }) => {
  let postDate = new Date(singleTopic.createdAt);
  let month = postDate.toLocaleString('default', { month: 'long' });
  let hours = postDate.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className='topic-card-container inner-Card'>
      <div className='d-flex'>
        <div className='user-img mr-20'>
          <img src={singleTopic.user && singleTopic.user.imageUrl} alt='' className='mb-3' />
        </div>
        <div className='mr-20'>
          <h4>{singleTopic.title}</h4>
          <p>{singleTopic.description}</p>
          <div className='time'>
            <FontAwesomeIcon icon={faClock} className='mr-4' />
            <span>Posted on : {`${postDate.getDate()} ${month} @ ${hours}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerTopicCard;
