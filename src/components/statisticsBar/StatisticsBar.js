import { useEffect, useState } from 'react';
import RecentTopicsCard from '../recentTopicsCard/RecentTopicsCard';
import MostPopularTopicsCard from '../mostPopularTopicsCard/MostPopularTopicsCard';
import MostReadableTopicsCard from '../mostReadableTopicsCard/MostReadableTopicsCard';
import http from '../../plugins/http';

const StatisticsBar = () => {
  const [recentTopics, setRecentTopics] = useState([]);
  const [popularTopics, setPopularTopics] = useState([]);
  const [readableTopics, setReadableTopics] = useState([]);

  useEffect(() => {
    http.get('topics-statistics').then((res) => {
      if (res.success) {
        setPopularTopics(res.mostPopularTopics);
        setReadableTopics(res.mostReadableTopics);
        setRecentTopics(res.resecentTopics);
      }
    });
  }, []);

  return (
    <>
      <div className='mb-3'>
        {recentTopics && recentTopics.length > 0 && (
          <RecentTopicsCard recentTopics={recentTopics} />
        )}
      </div>
      <div className='mb-3'>
        {popularTopics && popularTopics.length > 0 && (
          <MostPopularTopicsCard popularTopics={popularTopics} />
        )}
      </div>
      <div className='mb-3'>
        {readableTopics && readableTopics.length > 0 && (
          <MostReadableTopicsCard readableTopics={readableTopics} />
        )}
      </div>
    </>
  );
};

export default StatisticsBar;
