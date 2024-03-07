import React from 'react'
import { useLocation } from 'react-router-dom'

const MailTable = ({children}) => {
   const {pathname} =  useLocation();
   const mailTitle = pathname.length > 1 ? pathname.slice(1): "inbox"
    return (
        <div className="overflow-x-auto bg-white">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>{mailTitle}</th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export default MailTable