import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({children}) => {
    return (
        <div className="drawer drawer-open bg-base-200">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {
                    children
                }
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-72 min-h-full bg-base-100 text-base-content *:font-bold">
                    {/* Sidebar content here */}
                    <li><Link to="/compose">Compose</Link></li>
                    <li><Link to="/">Inbox</Link></li>
                    <li><Link to="/sent">Sent</Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar