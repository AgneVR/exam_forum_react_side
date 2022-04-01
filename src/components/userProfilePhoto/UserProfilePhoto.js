import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import './UserProfilePhoto.scss';

const UserProfilePhoto = () => {
  const [changeUserImageOpen, setChangeUserImageOpen] = useState(false);
  let currentUser = useSelector((state) => state.user.user);

  function changeUserPhoto() {
    return (
      <Modal
        centered={true}
        isOpen={changeUserImageOpen}
        toggle={() => setChangeUserImageOpen(false)}
      >
        <ModalHeader charcode='Y' toggle={() => setChangeUserImageOpen(false)}>
          Change profile picture
        </ModalHeader>
        <ModalBody>
          <div className='new-title-form'>
            <input type='text' placeholder='Enter image url' className='mb-3' />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='create-btn-form-topic'>Save</button>
          <button className='cancel-btn-form-topic' onClick={() => setChangeUserImageOpen(false)}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    );
  }

  return (
    <div className='box-user-img'>
      {changeUserPhoto()}
      <img className='profile-img' src={currentUser && currentUser.imageUrl} alt='' />
      <div className='middle'>
        <button onClick={() => setChangeUserImageOpen(true)} className='text'>
          Change photo
        </button>
      </div>
    </div>
  );
};

export default UserProfilePhoto;
