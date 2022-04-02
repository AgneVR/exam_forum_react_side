import { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/user';
import { setNotifications } from '../../features/notifications';
import http from '../../plugins/http';
import './LoginPage.scss';

const LoginPage = () => {
  const [getErrorMsg, setErrorMsg] = useState('');
  const inputEmailValue = useRef();
  const inpuPaswordValue = useRef();
  const dispatch = useDispatch();

  const toHomePage = useNavigate();

  const onClickHandler = () => {
    let emailValue = inputEmailValue.current.value;
    let passwordValue = inpuPaswordValue.current.value;

    const user = {
      email: emailValue,
      passwordOne: passwordValue,
    };

    http.post(user, 'login').then((res) => {
      if (res.success) {
        dispatch(setUser(res.oneUser));
        dispatch(setNotifications(res.notSeenNotifications));
        setErrorMsg('');
        toHomePage('/');
      } else {
        setErrorMsg(res.message);
      }
    });
  };

  return (
    <div className='bg'>
      <div className='container'>
        <div className='row justify-content-center align-items-center height100'>
          <div className='col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12'>
            <div className='login-container'>
              <div className='upper-text'>
                <h2>Login</h2>
                <p>
                  New member?
                  <Link to='/register'> Sign up here</Link>
                </p>
              </div>
              {getErrorMsg !== '' && <div className='error-message'>{getErrorMsg}</div>}
              <input ref={inputEmailValue} type='email' placeholder='Enter email' />
              <input ref={inpuPaswordValue} type='password' placeholder='Enter password' />
              <button onClick={onClickHandler} type='submit'>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
