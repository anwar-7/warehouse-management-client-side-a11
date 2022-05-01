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

// toast.error('Error!', {
//   position: "top-center",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   });

// toast.success('Success!', {
//   position: "top-center",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   });

// toast.warn('Warning!', {
//   position: "top-center",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   });

// toast.info('🦄 Wow so easy!', {
//   position: "top-center",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   });
