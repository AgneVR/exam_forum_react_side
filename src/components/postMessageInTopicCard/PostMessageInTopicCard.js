import { useSelector } from 'react-redux';
import { useRef } from 'react';
import http from '../../plugins/http';
import './PostMessageInTopicCard.scss';

const PostMessageInTopicCard = () => {
  let currentUser = useSelector((state) => state.user.user);

  const inputMessageValue = useRef();

  const onClickHandler = () => {
    let messageValue = inputMessageValue.current.value;

    const comment = {
      comment: messageValue,
      createdAt: new Date(),
      currentUser: currentUser,
      currentTopic: '',
    };

    http.post(comment, 'reate-comment').then((res) => {
      if (res.success) {
        console.log(res);
      } else {
        console.log(res);
      }
    });
  };
  return (
    <div className='post-message-block'>
      <div className='d-flex'>
        <div className='user-img mr-20'>
          <img src={currentUser && currentUser.imageUrl} alt='' className='mb-3' />
        </div>
        <div className='message-area'>
          <textarea
            ref={inputMessageValue}
            placeholder='Type your message here'
            rows='4'
            cols='50'
          ></textarea>
          <div className='d-flex justify-content-end'>
            <button onClick={onClickHandler}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMessageInTopicCard;
