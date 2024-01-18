import React from 'react'
import { useSelector } from 'react-redux'
import { Link,Outlet } from 'react-router-dom'

const Sidebar = () => {
    const {unreadMail} = useSelector(state => state.mail)
    return (
        <div className="drawer drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {
                    <Outlet/>
                }
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-72 min-h-full bg-base-100 text-base-content *:font-bold">
                    {/* Sidebar content here */}
                    <li className='relative'><Link to="/compose">Compose</Link><span className='absolute right-0 bg-zinc-700 text-white'>{unreadMail}</span></li>
                    <li><Link to="/">Inbox</Link></li>
                    <li><Link to="/sent">Sent</Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar