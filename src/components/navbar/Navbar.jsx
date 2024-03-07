import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../services/redux/slices/authSlice';
import { Bars3Icon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const { currentUser } = useSelector(state => state.auth);
  return (
    <nav className='navbar border-b-2 bg-white'>
      <div className="flex-1">
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button lg:hidden">
          <Bars3Icon className="h-6 w-6" />
        </label>
        <Link to={"/"}><span className='text-2xl font-bold btn btn-ghost'>GetMail</span></Link>
      </div>
      <div className="flex-none">
        {currentUser && <span className='px-8 py-2 bg-red-200 rounded-lg mr-5 hidden md:block'>{currentUser.email}</span>}
        {
          !currentUser && <button className='btn btn-info'>Log in</button>
        }
      </div>
    </nav>
  )
}

export default Navbar