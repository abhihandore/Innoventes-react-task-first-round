import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../slices/loginSlice';
import style from '../styles/pages/login.module.css';

const Login = () => {
  const initialLoginCredState = {
    username: '',
    password: '',
  };
  const navigate = useNavigate();
  const [loginCred, setLoginCred] = useState(initialLoginCredState);

  const { isLoading, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLoginCred((prev) => ({ ...prev, [id]: value }));
  };

  function onAfterLogin({ isAuthenticated }) {
    if (isAuthenticated) {
      navigate('/planet');
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userLogin({
        requestPayload: loginCred,
        onAfterLogin,
      })
    );
  };

  return (
    <>
      <div className="showMessage">
        {isLoading ? 'Loading...' : error ? error : ''}
      </div>
      <form className="flex-container" onSubmit={handleFormSubmit}>
        <div className="flex">
          <label className={style.inputLabel} htmlFor="username">
            Name
          </label>
          <input
            id="username"
            type="text"
            className={style.input}
            required
            value={loginCred.username}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div className="flex">
          <label className={style.inputLabel} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className={style.input}
            required
            value={loginCred.password}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <button className={style.loginBtn}>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Login;
