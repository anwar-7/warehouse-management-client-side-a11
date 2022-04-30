import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
// I don't no this is working here or not
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ManageItems from './components/MenuItems/ManageItems/ManageItems';
import AddItem from './components/MenuItems/AddItem/AddItem';
import MyItems from './components/MenuItems/MyItems/MyItems';
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
        {/* dropdown menu */}
        <Route path="/manageItems" element={<ManageItems />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/myItems" element={<MyItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
