import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../services/redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { currentUser } = useSelector(state => state.auth);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogOut(){
    dispatch(logout());
    Navigate("/login");
  }
  return (
    <nav className='navbar border-b-2 bg-white'>
      <div className="flex-1">
      <span className='text-2xl font-bold btn btn-ghost'>Mail Box</span>
      </div>
      <div className="flex-none">
      {
        currentUser ? <button className='btn btn-info' onClick={handleLogOut}>Log out</button>
          :
          <button className='btn btn-info'>Log in</button>
      }
      </div>
    </nav>
  )
}

export default Navbar