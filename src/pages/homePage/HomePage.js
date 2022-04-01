import { useEffect, useState } from 'react';
import TopicCard from '../../components/topicCard/TopicCard';
import MostReadableTopicsCard from '../../components/mostReadableTopicsCard/MostReadableTopicsCard';
import MostPopularTopicsCard from '../../components/mostPopularTopicsCard/MostPopularTopicsCard';
import RecentTopicsCard from '../../components/recentTopicsCard/RecentTopicsCard';
import http from '../../plugins/http';
import './HomePage.scss';

const HomePage = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    http.get('topics').then((res) => {
      if (res.success) {
        setTopics(res.topics);
        console.log(res.topics);
      } else {
        console.log(res);
      }
    });
  }, []);

  return (
    <div className='container mt-50'>
      <div className='row'>
        <div className='col-lg-8'>
          {/* <TopicCard divClassName='favouriteFopic' /> */}
          {topics.length > 0 &&
            topics.map((el, i) => <TopicCard divClassName='favouriteFopic' key={i} el={el} />)}
        </div>
        <div className='col-lg-4'>
          <div className='mb-3'>
            <RecentTopicsCard />
          </div>
          <div className='mb-3'>
            <MostPopularTopicsCard />
          </div>
          <div className='mb-3'>
            <MostReadableTopicsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
