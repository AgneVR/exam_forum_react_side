import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import http from '../../plugins/http';
import './PostMessageInTopicCard.scss';

const PostMessageInTopicCard = ({ singleTopic, onCreateComment }) => {
  const [getErrorMsg, setErrorMsg] = useState('');
  let currentUser = useSelector((state) => state.user.user);

  const inputMessageValue = useRef();

  const onClickHandler = () => {
    let messageValue = inputMessageValue.current.value;

    const comment = {
      comment: messageValue,
      createdAt: new Date(),
      currentUser: currentUser,
      currentTopic: singleTopic,
    };

    http.post(comment, 'create-comment').then((res) => {
      if (res.success) {
        onCreateComment(res);
        createNotification();
        inputMessageValue.current.value = '';
        setErrorMsg('');
      } else {
        setErrorMsg(res.message);
      }
    });
  };

  const createNotification = () => {
    if (singleTopic.user._id !== currentUser._id) {
      let content = `${currentUser.username} added new comment created in topic ${singleTopic.title}`;
      let destinationUrl = `/topics/${singleTopic._id}`;

      const notification = {
        content: content,
        destinationUrl: destinationUrl,
        currentUser: singleTopic.user,
      };

      http.post(notification, 'create-notification').then((res) => {});
    }
  };

  return (
    <div className='post-message-block'>
      <div className='d-flex'>
        <div className='user-img mr-20'>
          <img src={currentUser && currentUser.imageUrl} alt='' className='mb-3' />
        </div>
        <div className='message-area'>
          <p className='error-message'>{getErrorMsg}</p>
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
