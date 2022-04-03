import { useEffect, useState } from 'react';
import UserProfileHeader from '../../components/userProfileHeader/UserProfileHeader';
import TopicCard from '../../components/topicCard/TopicCard';
import http from '../../plugins/http';

const UserProfilePage = () => {
  const [myTopics, setMyTopics] = useState([]);

  useEffect(() => {
    http.get('topics/my-topics').then((res) => {
      if (res.success) {
        setMyTopics(res.myTopic);
      }
    });
  }, []);

  return (
    <div className='container mt-50'>
      <UserProfileHeader />
      <div className='row mt-4'>
        {myTopics && myTopics.length > 0 ? (
          myTopics.map((el, i) => (
            <div className='col-lg-6 d-flex' key={i}>
              <TopicCard el={el} />
            </div>
          ))
        ) : (
          <p>No topics found</p>
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;
