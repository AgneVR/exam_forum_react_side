import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './MostPopularTopicsCard.scss';

const MostPopularTopicsCard = () => {
  return (
    <div className='most-popular'>
      <div className='d-flex align-items-center mb-3'>
        <FontAwesomeIcon icon={faAward} />
        <h6>Most popular topics</h6>
      </div>
      <div className='d-flex flex-column mb-2 box '>
        <Link to='/'>Pinterest Now Worth $3.8 Billion Pinterest Now Worth $3.8 Billion</Link>
        <div className='messages d-flex align-items-center'>
          <FontAwesomeIcon icon={faMessage} className='mr-4' />
          <span>200</span>
        </div>
      </div>
      <div className='d-flex flex-column mb-2 box'>
        <Link to='/'>Pinterest Now Worth $3.8 Billion</Link>
        <div className='messages d-flex align-items-center'>
          <FontAwesomeIcon icon={faMessage} className='mr-4' />
          <span>200</span>
        </div>
      </div>
    </div>
  );
};

export default MostPopularTopicsCard;
