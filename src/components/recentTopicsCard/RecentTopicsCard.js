import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './RecentTopicsCard.scss';

const RecentTopicsCard = () => {
  return (
    <div className='recent-topics'>
      <div className='d-flex align-items-center mb-3'>
        <FontAwesomeIcon icon={faCat} />
        <h6>Recent topics</h6>
      </div>
      <div className='d-flex flex-column mb-2 box pb-2'>
        <Link to='/'>What Instagram Ads Will Look Like Will Look Like</Link>
        <div className='time d-flex align-items-center'>
          <FontAwesomeIcon icon={faClock} className='mr-4' />
          <span>15 min</span>
        </div>
      </div>
      <div className='d-flex flex-column mb-2 box pb-2'>
        <Link to='/'>What Instagram Ads Will Look Like </Link>
        <div className='time d-flex align-items-center'>
          <FontAwesomeIcon icon={faClock} className='mr-4' />
          <span>15 min</span>
        </div>
      </div>
      <div className='d-flex flex-column mb-2 box pb-2'>
        <Link to='/'>What Instagram Ads Will Look Like Will Look Like</Link>
        <div className='time d-flex align-items-center'>
          <FontAwesomeIcon icon={faClock} className='mr-4' />
          <span>15 min</span>
        </div>
      </div>
    </div>
  );
};

export default RecentTopicsCard;
