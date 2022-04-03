import { useEffect, useState } from 'react';
import TopicCard from '../../components/topicCard/TopicCard';
import http from '../../plugins/http';
import StatisticsBar from '../../components/statisticsBar/StatisticsBar';

const HomePage = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    http.get('topics').then((res) => {
      if (res.success) {
        setTopics(res.topics);
      }
    });
  }, []);

  return (
    <div className='container mt-50'>
      <div className='row'>
        <div className='col-lg-8'>
          {topics && topics.length > 0 ? (
            topics.map((el, i) => <TopicCard key={i} el={el} />)
          ) : (
            <p>There are no topics</p>
          )}
        </div>
        <div className='col-lg-4'>
          <StatisticsBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
