import { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import http from '../../plugins/http';
import './RegisterPage.scss';

const RegisterPage = () => {
  const [getErrorMsg, setErrorMsg] = useState('');

  const toLoginPage = useNavigate();

  const inputUsernameValue = useRef();
  const inputEmailValue = useRef();
  const inputImageUrlValue = useRef();
  const inpuPaswordOneValue = useRef();
  const inpuPaswordTwoValue = useRef();

  const onClickHandler = async () => {
    let usernameValue = inputUsernameValue.current.value;
    let emailValue = inputEmailValue.current.value;
    let imageUrlValue = inputImageUrlValue.current.value;
    let passwordOneValue = inpuPaswordOneValue.current.value;
    let passwordTwoValue = inpuPaswordTwoValue.current.value;

    const user = {
      username: usernameValue,
      email: emailValue,
      imageUrl: imageUrlValue,
      passwordOne: passwordOneValue,
      passwordTwo: passwordTwoValue,
    };

    http.post(user, 'register').then((res) => {
      if (res.success) {
        toLoginPage('/login');
        setErrorMsg('');
      } else {
        setErrorMsg(res.message);
      }
    });
  };

  return (
    <div className='bg'>
      <div className='container'>
        <div className='row justify-content-center align-items-center height100'>
          <div className='col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 '>
            <div className='register-container'>
              <div className='upper-text'>
                <h2>Register</h2>
                <p>
                  Do you already have an account?
                  <Link to='/login'> Log in here</Link>
                </p>
              </div>
              {getErrorMsg !== '' && <div className='error-message'>{getErrorMsg}</div>}
              <input
                name='username'
                type='text'
                ref={inputUsernameValue}
                placeholder='Enter username'
              />
              <input name='email' type='email' ref={inputEmailValue} placeholder='Enter email' />
              <input
                autoComplete='off'
                name='imageUrl'
                type='text'
                ref={inputImageUrlValue}
                placeholder='Enter image url'
              />
              <input
                autoComplete='off'
                name='passwordOne'
                type='password'
                ref={inpuPaswordOneValue}
                placeholder='Enter Password'
              />
              <input
                autoComplete='off'
                name='passwordTwo'
                type='password'
                ref={inpuPaswordTwoValue}
                placeholder='Repeat Password'
              />
              <button onClick={onClickHandler} type='submit'>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
