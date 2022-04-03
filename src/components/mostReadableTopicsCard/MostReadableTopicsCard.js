import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './MostReadableTopicsCard.scss';

const MostReadableTopicsCard = ({ readableTopics }) => {
  return (
    <div className='most-readable'>
      <div className='d-flex align-items-center mb-3'>
        <FontAwesomeIcon icon={faBook} />
        <h6>Most readable topics</h6>
      </div>
      {readableTopics.map((el, i) => (
        <div className='d-flex flex-column mb-2 box' key={i}>
          <Link to={`/topics/${el._id}`}>{el.title}</Link>
          <div className='views d-flex align-items-center'>
            <FontAwesomeIcon icon={faEye} className='mr-4' />
            <span>{el.viewsCount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostReadableTopicsCard;
