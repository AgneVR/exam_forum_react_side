import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faMessage } from '@fortawesome/free-solid-svg-icons';
import './MostPopularTopicsCard.scss';

const MostPopularTopicsCard = ({ popularTopics }) => {
  return (
    <div className='most-popular'>
      <div className='d-flex align-items-center mb-3'>
        <FontAwesomeIcon icon={faAward} />
        <h6>Most popular topics</h6>
      </div>
      {popularTopics.map((el, i) => (
        <div className='d-flex flex-column mb-2 box' key={i}>
          <Link to={`/topics/${el._id}`}>{el.title}</Link>
          <div className='messages d-flex align-items-center'>
            <FontAwesomeIcon icon={faMessage} className='mr-4' />
            <span>{el.commentsCount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostPopularTopicsCard;
