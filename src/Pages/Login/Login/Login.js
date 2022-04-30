import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container container">
      <PageTitle title={'Login'}></PageTitle>
      <h3>Please Login here</h3>
    </div>
  );
};

export default Login;
