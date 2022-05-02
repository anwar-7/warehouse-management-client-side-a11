import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
// I don't no this is working here or not
import 'react-toastify/dist/ReactToastify.css';

import Header from './Pages/Shared/Header/Header';
import Blogs from './Pages/Blogs/Blogs';
import ManageItems from './Pages/MenuItems/ManageItems/ManageItems';
import AddItem from './Pages/MenuItems/AddItem/AddItem';
import MyItems from './Pages/MenuItems/MyItems/MyItems';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* have to be delete /inventory or update it */}
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:productId" element={<Inventory />} />
        {/* dropdown menu */}
        <Route path="/manageItems" element={<ManageItems />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/myItems" element={<MyItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* toast container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;

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

// toast.info('Information!', {
//   position: "top-center",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   });
