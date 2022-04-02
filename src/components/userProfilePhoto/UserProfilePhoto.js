import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import http from '../../plugins/http';
import { setUser } from '../../features/user';
import './UserProfilePhoto.scss';

const UserProfilePhoto = () => {
  const [changeUserImageOpen, setChangeUserImageOpen] = useState(false);
  let currentUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const inputImageUrlValue = useRef();

  const onClickHandler = () => {
    let imageUrlValue = inputImageUrlValue.current.value;

    const image = {
      imageUrl: imageUrlValue,
    };

    http.post(image, 'change-user-photo').then((res) => {
      if (res.success) {
        dispatch(setUser(res.userInfo));
        setChangeUserImageOpen(false);
        window.location.reload();
        console.log(res);
      } else {
        console.log(res);
      }
    });
  };

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
            <input
              ref={inputImageUrlValue}
              type='text'
              placeholder='Enter image url'
              className='mb-3'
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button onClick={onClickHandler} className='create-btn-form-topic'>
            Save
          </button>
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
