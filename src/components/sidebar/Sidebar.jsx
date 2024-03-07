import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { logout } from '../../services/redux/slices/authSlice'

const Sidebar = () => {
    const { unreadMail } = useSelector(state => state.mail)
    const { currentUser } = useSelector(state => state.auth);
    const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(logout());
  }
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {
                    <Outlet />
                }
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-16 md:pt-4 w-72 min-h-full bg-base-100 text-base-content *:font-bold">
                    {/* Sidebar content here */}
                    {currentUser && <p className='px-8 py-2 bg-error rounded-lg mx-auto md:hidden'>{currentUser.email}</p>}
                    <li className='mt-4'><Link to="/compose">Compose</Link></li>
                    <li className='relative'>
                        <Link to="/">Inbox</Link>
                        <span className='absolute right-0 bg-error'>{unreadMail}</span>
                    </li>
                    <li><Link to="/sent">Sent</Link></li>
                    <button className='btn btn-info mt-7' onClick={handleLogOut}>Log out</button>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar