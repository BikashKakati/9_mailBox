import React from 'react'

const MailTable = ({children}) => {
    return (
        <div className="overflow-x-auto bg-white">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Primary</th>
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