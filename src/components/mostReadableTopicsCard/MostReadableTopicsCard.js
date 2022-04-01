import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './MostReadableTopicsCard.scss';

const MostReadableTopicsCard = () => {
  return (
    <div className='most-readable'>
      <div className='d-flex align-items-center mb-3'>
        <FontAwesomeIcon icon={faBook} />
        <h6>Most readable topics</h6>
      </div>
      <div className='d-flex flex-column mb-2 box'>
        <Link to='/'>What Instagram Ads Will Look Like</Link>
        <div className='views d-flex align-items-center'>
          <FontAwesomeIcon icon={faEye} className='mr-4' />
          <span>1.200</span>
        </div>
      </div>
      <div className='d-flex flex-column mb-2 box'>
        <Link to='/'>What Instagram Ads Will Look Like</Link>
        <div className='views d-flex align-items-center'>
          <FontAwesomeIcon icon={faEye} className='mr-4' />
          <span>1.200</span>
        </div>
      </div>
      <div className='d-flex flex-column mb-2 box'>
        <Link to='/'>What Instagram Ads Will Look Like</Link>
        <div className='views d-flex align-items-center'>
          <FontAwesomeIcon icon={faEye} className='mr-4' />
          <span>1.200</span>
        </div>
      </div>
    </div>
  );
};

export default MostReadableTopicsCard;
