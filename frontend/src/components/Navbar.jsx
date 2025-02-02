import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { handleerror, handlesuccess } from '../utils.jsx';
import { AuthContext } from '../Context/AuthContext.jsx';
import { ToastContainer } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  console.log("isAuthenticated:", isAuthenticated);

  const handlenavigation = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      handleerror("Please login to access this page");
    }
  };

  const handlelogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedinuser');
    setIsAuthenticated(false);
    handlesuccess('User Logged Out');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <>
      <section className="bg-gray-800 text-white py-4 fixed top-0 w-full">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Clickable Home Link */}
          <Link to="/" className="text-2xl font-bold">C&D Waste Management System</Link>

          <ul className="flex space-x-6 my-1.5">
            <li className="hover:bg-gray-700 hover:bg-opacity-50 py-2 px-2 rounded" onClick={() => handlenavigation('/classifier')}>
              Classifier
            </li>
            <li className="hover:bg-gray-700 hover:bg-opacity-50 py-2 px-2 rounded" onClick={() => handlenavigation('/marketplace')}>
              Marketplace
            </li>
            <li className="hover:bg-gray-700 hover:bg-opacity-50 py-2 px-2 rounded" onClick={() => handlenavigation('/recycling-facilities')}>
              Recycling Facilities
            </li>
            <li className="hover:bg-gray-700 hover:bg-opacity-50 py-2 px-2 rounded mr-10" onClick={() => handlenavigation('/about-us')}>
              About Us
            </li>

            {/* Authentication Section */}
            <li>
              {isAuthenticated ? (
                <div className="flex items-center bg-amber-800 text-white mr-10 px-2 py-1 rounded-full">
                  <img src="/user.png" alt="User Icon" className="ml-2 w-10 h-10 rounded-full" />
                  <button onClick={handlelogout} className='px-4 cursor-pointer'>Logout</button>
                </div>
              ) : (
                <div className="flex items-center bg-amber-800 text-white mr-10 px-2 py-1 rounded-full">
                  <Link to='/signup'>Signup</Link>
                  <img src="/user.png" alt="User Icon" className="ml-2 w-10 h-10 rounded-full" />
                </div>
              )}
            </li>
          </ul>
        </nav>
      </section>
      <ToastContainer />
    </>
  );
};

export default Navbar;
