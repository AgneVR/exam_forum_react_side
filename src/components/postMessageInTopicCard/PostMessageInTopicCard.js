import { useSelector } from 'react-redux';
import './PostMessageInTopicCard.scss';

const PostMessageInTopicCard = () => {
  let currentUser = useSelector((state) => state.user.user);
  return (
    <div className='post-message-block'>
      <div className='d-flex'>
        <div className='user-img mr-20'>
          <img src={currentUser && currentUser.imageUrl} alt='' className='mb-3' />
        </div>
        <div className='message-area'>
          <textarea placeholder='Type your message here' rows='4' cols='50'></textarea>
          <div className='d-flex justify-content-end'>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMessageInTopicCard;
