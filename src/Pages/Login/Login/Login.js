import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: '',
  });

  const [signInWithEmail, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: '' });
    } else {
      setErrors({ ...errors, email: 'Invalid email' });
      setUserInfo({ ...userInfo, email: '' });
    }

    // setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: '' });
    } else {
      setErrors({ ...errors, password: 'Minimum 6 characters!' });
      setUserInfo({ ...userInfo, password: '' });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(userInfo);

    signInWithEmail(userInfo.email, userInfo.password);
  };

  // password resat
  const resetPassword = () => {
    // const email = userInfo.email
    if (userInfo.email) {
      sendPasswordResetEmail(userInfo.email);
      toast.success('Sent email');
    } else {
      toast.warning('Enter your email address Please');
    }
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  useEffect(() => {
    const error = hookError;
    if (error) {
      switch (error?.code) {
        case 'auth/invalid-email':
          toast.error('Invalid email, Please provide a valid email');
          break;
        case 'auth/invalid-password':
          toast.error('Wrong Input. Password Intruder!!');
          break;
        default:
          toast.error('Something will be wrong! You are not Register!!!');
      }
    }
  }, [hookError]);

  if (loading) {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="login-container container mb-5 w-50 mx-auto bg-light">
      <PageTitle title={'Login'}></PageTitle>
      <div>
        <h3 className="text-center">PLEASE LOGIN</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleEmailChange}
              type="email"
              name="email"
              placeholder="Enter Email"
              autoComplete="off"
              required
            />
            {errors?.email && (
              <p className="text-danger fw-bold">{errors.email}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
              autoComplete="off"
              required
            />
            {errors?.password && (
              <p className="text-danger fw-bold">{errors.password}</p>
            )}
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <div className="d-flex justify-content-center align-items-center">
            <button className="login-button">Login</button>
          </div>
          <p className=" text-center mt-2">
            Don't have an account? <Link to="/register">Please Register</Link>{' '}
          </p>
        </Form>
        <p className="text-center">
          Forget Password?{' '}
          <button
            className="btn btn-link text-primary pe-auto text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>{' '}
        </p>
        <div className=" d-flex justify-content-center align-content-center mt-5">
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
