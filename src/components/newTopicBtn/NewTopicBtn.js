import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { useEffect, useState } from 'react';
import './NewTopicBtn.scss';

const NewTopicBtn = () => {
  const [newTopicModalOpen, setNewTopicModalOpen] = useState(false);
  function newTopicModal() {
    return (
      <Modal centered={true} isOpen={newTopicModalOpen} toggle={() => setNewTopicModalOpen(false)}>
        <ModalHeader charcode='Y' toggle={() => setNewTopicModalOpen(false)}>
          Create new Topic
        </ModalHeader>
        <ModalBody>
          <div className='new-title-form'>
            <input type='text' placeholder='Enter title' className='mb-3' />
            <input type='text' placeholder='Enter short description' className='mb-3' />
            <textarea type='text' placeholder='Enter description' />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='create-btn-form-topic'>Create</button>
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
