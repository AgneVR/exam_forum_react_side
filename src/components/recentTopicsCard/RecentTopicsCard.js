import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faClock } from '@fortawesome/free-solid-svg-icons';
import './RecentTopicsCard.scss';

const RecentTopicsCard = ({ recentTopics }) => {
  function calcDate(el) {
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
  }

  return (
    <div className='recent-topics'>
      <div className='d-flex align-items-center mb-3'>
        <FontAwesomeIcon icon={faCat} />
        <h6>Recent topics</h6>
      </div>
      {recentTopics.map((el, i) => (
        <div className='d-flex flex-column mb-2 box pb-2' key={i}>
          <Link to={`/topics/${el._id}`}>{el.title}</Link>
          <div className='time d-flex align-items-center'>
            <FontAwesomeIcon icon={faClock} className='mr-4' />
            <span>{calcDate(el)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentTopicsCard;
