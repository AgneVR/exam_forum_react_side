import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import http from '../../plugins/http';
import './NewTopicBtn.scss';

const NewTopicBtn = () => {
  const [newTopicModalOpen, setNewTopicModalOpen] = useState(false);
  const [getErrorMsg, setErrorMsg] = useState('');
  const inputTitleValue = useRef();
  const inputShortDescriptionValue = useRef();
  const inputDescriptionValue = useRef();
  let currentUser = useSelector((state) => state.user.user);
  const toInnerTopicPage = useNavigate();

  const onClickHandler = () => {
    let titleValue = inputTitleValue.current.value;
    let shortDescriptionValue = inputShortDescriptionValue.current.value;
    let descriptionValue = inputDescriptionValue.current.value;

    const topic = {
      title: titleValue,
      shortDescription: shortDescriptionValue,
      description: descriptionValue,
      createdAt: new Date(),
      currentUser: currentUser,
    };

    http.post(topic, 'create-topic').then((res) => {
      if (res.success) {
        setNewTopicModalOpen(false);
        toInnerTopicPage(`/topics/${res.topic._id}`);
        console.log(res);
      } else {
        console.log(res);
        setErrorMsg(res.message);
      }
    });
  };

  function newTopicModal() {
    return (
      <Modal centered={true} isOpen={newTopicModalOpen} toggle={() => setNewTopicModalOpen(false)}>
        <ModalHeader charcode='Y' toggle={() => setNewTopicModalOpen(false)}>
          Create new Topic
        </ModalHeader>
        <ModalBody>
          <p className='error-message'>{getErrorMsg}</p>
          <div className='new-title-form'>
            <input ref={inputTitleValue} type='text' placeholder='Enter title' className='mb-3' />
            <input
              ref={inputShortDescriptionValue}
              type='text'
              placeholder='Enter short description'
              className='mb-3'
            />
            <textarea ref={inputDescriptionValue} type='text' placeholder='Enter description' />
          </div>
        </ModalBody>
        <ModalFooter>
          <button onClick={onClickHandler} className='create-btn-form-topic'>
            Create
          </button>
          <button className='cancel-btn-form-topic' onClick={() => setNewTopicModalOpen(false)}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    );
  }
  return (
    <>
      {newTopicModal()}
      <button onClick={() => setNewTopicModalOpen(true)} className='btn-topic mr-20'>
        Start New topic
      </button>
    </>
  );
};

export default NewTopicBtn;
