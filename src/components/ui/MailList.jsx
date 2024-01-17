import React from 'react'

const MailList = () => {
    const mail = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam est adipisci fugiat dicta, ipsam ex. Dolorem animi reiciendis deleniti illum maiores repellat earum, rerum veritatis minima placeat natus ducimus quidem."
    return (
        <tr className="border-y-1 border-zinc-300">
            <td>randeep@gamil.com</td>
            <td className='font-semibold'>Meeting scheduled</td>
            <td>{mail.slice(0,25)+"..."}</td>
            <td>12 aug 2022</td>
            <td>
                <button className='btn btn-primary'>Delete</button>
            </td>
        </tr>
    )
}

export default MailList