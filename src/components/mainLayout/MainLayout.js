import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setUser, logoutUser } from '../../features/user';
import http from '../../plugins/http';
import NewTopicBtn from '../newTopicBtn/NewTopicBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faDoorOpen, faBell, faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/Untitled-1.png';
import './MainLayout.scss';

const MainLayout = () => {
  const toLoginPage = useNavigate();
  const dispatch = useDispatch();
  let currentUser = useSelector((state) => state.user.user);
  const location = useLocation();

  useEffect(() => {
    http.get(`get-user`).then((res) => {
      if (res.userInfo !== undefined) {
        dispatch(setUser(res.userInfo));
      } else {
        if (location.pathname !== '/login') {
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
                <div className='search-topic d-flex mr-20'>
                  <input placeholder='Search Topic' />
                  <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
                <NewTopicBtn />

                <Link to='/favourite-topics' className='heart-icon mr-20'>
                  <FontAwesomeIcon icon={faHeart} />
                </Link>
                <div className='notification mr-20'>
                  <FontAwesomeIcon icon={faBell} />
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
              <Link to={`/register`}>Register</Link>
              <Link to={`/login`}>Login</Link>
              <Link to={`/`}>Forum</Link>
            </div>
            <Link to='/' className='heart-icon mr-20'>
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
