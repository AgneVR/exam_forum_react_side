import { Outlet, Link, useNavigate, useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, logoutUser } from '../../features/user';
import http from '../../plugins/http';
import NewTopicBtn from '../newTopicBtn/NewTopicBtn';
import { setNotifications } from '../../features/notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faBell, faHeart } from '@fortawesome/free-solid-svg-icons';
import './MainLayout.scss';

const MainLayout = () => {
  const toLoginPage = useNavigate();
  const toTopicUrl = useNavigate();
  const dispatch = useDispatch();
  let currentUser = useSelector((state) => state.user.user);
  let currentNotifications = useSelector((state) => state.notifications.notifications);
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    http.get(`get-user`).then((res) => {
      if (res.userInfo !== undefined) {
        dispatch(setUser(res.userInfo));
        dispatch(setNotifications(res.notSeenNotifications));
      } else {
        if (
          location.pathname !== '/login' &&
          location.pathname !== '/register' &&
          location.pathname !== '/favourite-topics' &&
          location.pathname !== '/' &&
          !location.pathname.includes('/topic')
        ) {
          toLoginPage('/login');
        }
      }
    });
  }, []);

  const resetUser = () => {
    http.get(`logout`).then((res) => {
      dispatch(logoutUser());
      toLoginPage('/login');
    });
  };

  function topImageBar() {
    if (location.pathname !== '/login' && location.pathname !== '/register') {
      return <div className='bg-upper-box'></div>;
    }
  }

  const onNotificationHandler = (el) => {
    http.get(`notification-is-seen/${el._id}`).then((res) => {
      if (res.success) {
        dispatch(setNotifications(res.notSeenNotifications));
        setShowNotifications(false);
        toTopicUrl(el.destinationUrl);
      }
    });
  };

  function notificationList() {
    return (
      <div className={`dropdown-notification ${showNotifications ? 'show' : ''}`}>
        {currentNotifications && currentNotifications.length > 0 ? (
          currentNotifications.map((el, i) => (
            <p onClick={() => onNotificationHandler(el)} key={i}>
              {el.content}
            </p>
          ))
        ) : (
          <p className='d-flex justify-content-center mb-0'>You have none notifications</p>
        )}
      </div>
    );
  }

  const handleOnBlurNotifications = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowNotifications(false);
    }
  };

  function setLayput() {
    if (currentUser !== null) {
      return (
        <>
          <div className='nav-bar-second'>
            <div className='container d-flex justify-content-between'>
              <div className='d-flex align-items-center'>
                <Link to='/user-profile/topics' className='nav-user-img mr-20'>
                  <img src={currentUser.imageUrl} alt='' />
                </Link>
                <Link className='mr-20' to={`/`}>
                  Forum
                </Link>
              </div>

              <div className='d-flex align-items-center'>
                <NewTopicBtn />

                <Link to='/favourite-topics' className='heart-icon mr-20'>
                  <FontAwesomeIcon icon={faHeart} />
                </Link>
                <div
                  tabIndex='0'
                  onBlur={(event) => handleOnBlurNotifications(event)}
                  className='notification mr-20'
                >
                  <span onClick={() => setShowNotifications(!showNotifications)}>
                    {currentNotifications && currentNotifications.length > 0 && (
                      <span className='notification-marker'></span>
                    )}
                    <FontAwesomeIcon icon={faBell} />
                  </span>
                  {notificationList()}
                </div>

                <button className='nav-btn close' onClick={resetUser}>
                  <FontAwesomeIcon icon={faDoorOpen} />
                </button>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className='nav-bar-first'>
          <div className='container d-flex justify-content-between'>
            <div>
              <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to={`/register`}>
                Register
              </NavLink>
              <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to={`/login`}>
                Login
              </NavLink>
              <NavLink className={(navData) => (navData.isActive ? 'active' : '')} to={`/`}>
                Forum
              </NavLink>
            </div>
            <Link to='/favourite-topics' className='heart-icon mr-20'>
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
        </div>
      );
    }
  }
  return (
    <>
      {topImageBar()}
      <div className='relative'>
        <nav className='nav-bar'>{setLayput()}</nav>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
