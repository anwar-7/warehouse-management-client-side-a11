import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './SocialLogin.css';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, googleError] =
    useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  useEffect(() => {
    const error = googleError;
    if (error) {
      switch (error?.code) {
        case 'auth/invalid-email':
          toast.error('Invalid email, Please provide a valid email', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          break;
        case 'auth/invalid-password':
          toast.error('Wrong Input. Password Intruder!!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          break;
        default:
          toast.error('something will be wrong! You are not Register!!!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      }
    }
  }, [googleError]);
  return (
    <div className="social-login-container ">
      <PageTitle title={'Social Login'}></PageTitle>
      <Button
        className="social-login-button fw-bold px-5"
        variant="info"
        onClick={() => signInWithGoogle()}
      >
        Google
      </Button>
    </div>
  );
};

export default SocialLogin;
