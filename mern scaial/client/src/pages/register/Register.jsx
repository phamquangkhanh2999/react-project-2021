import './register.css';
import { useContext, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post('/auth/register', user);
        history.push('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>QuangKhanhDEV</h3>
          <span className='loginDesc'>
            Connect with friends and the word around you on Quangkhanh
          </span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={handleClick}>
            <input
              placeholder='Username'
              required
              ref={username}
              className='loginInput'
            />
            <input
              placeholder='Email'
              required
              ref={email}
              type='email'
              className='loginInput'
            />
            <input
              placeholder='Password'
              required
              ref={password}
              type='password'
              className='loginInput'
              minLength='6'
            />
            <input
              placeholder='Password Again'
              required
              ref={passwordAgain}
              type='password'
              className='loginInput'
            />
            <button className='loginButton' type='submit'>
              Log Up
            </button>

            <button className='loginRegisterButton'>Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
