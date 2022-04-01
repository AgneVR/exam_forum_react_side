import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserProfilePhoto from '../userProfilePhoto/UserProfilePhoto';
import './UserProfileHeader.scss';

const UserProfileHeader = () => {
  let currentUser = useSelector((state) => state.user.user);
  return (
    <div className='user-header'>
      <div className='bg-user'>
        <UserProfilePhoto />
        <h3>{currentUser && currentUser.username}</h3>
      </div>
      <div className='d-flex menu'>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : '')}
              to='/user-profile/topics'
            >
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active' : '')}
              to='/user-profile/comments'
            >
              Comments
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfileHeader;
