import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: '',
  });

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

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

  const handleConfirmPasswordChange = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, confirmPassword: '' });
    } else {
      setErrors({ ...errors, confirmPassword: "Password's don't match" });
      setUserInfo({ ...userInfo, confirmPassword: '' });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(userInfo);
    toast.success(
      'Your account is created successfully. Please verify you account!!'
    );
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
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
          toast.error('something will be wrong! You are not Register!!!');
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
    <div className="register-container mb-5 container w-50 mx-auto bg-light">
      <PageTitle title={'Register'}></PageTitle>
      <div>
        <h3 className="text-center">PLEASE REGISTER</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleEmailChange}
              type="email"
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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={handleConfirmPasswordChange}
              type="password"
              placeholder="Confirm Password"
              autoComplete="off"
              required
            />
            {errors?.confirmPassword && (
              <p className="text-danger fw-bold">{errors.confirmPassword}</p>
            )}
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <div className="d-flex justify-content-center align-items-center">
            <button className="register-button">Register</button>
          </div>
          <p className=" text-center mt-2">
            Have an account? <Link to="/login">Please Login</Link>{' '}
          </p>
        </Form>
        <div className=" d-flex justify-content-center align-content-center mt-5">
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
