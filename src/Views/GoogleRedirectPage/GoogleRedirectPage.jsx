import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from 'redux/auth/authSlice';
import { useSearchParams } from 'react-router-dom';
import Spinner from 'modules/Spinner';

// import style from './GoogleRedirectPage.module.css';

const GoogleRedirectPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const token = params.get('token');

  useEffect(() => {
    dispatch(setToken({ token }));
    setTimeout(() => {
      navigate('/home', { replace: true });
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Spinner />;
};

export default GoogleRedirectPage;
