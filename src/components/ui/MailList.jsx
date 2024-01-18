import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { recievedMailHandler } from '../../services/redux/api/mailsThunk';
import { toast } from 'react-hot-toast';

const MailList = ({mailDetails, type}) => {
    const {sender, message, subject,id, read} = mailDetails;
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    // const date = new Date(timeStamp.seconds*1000).toLocalTimeString();
    async function handleMailOpening(){
        toast.loading("Loading...");
        if(!read){
            await dispatch(recievedMailHandler({...mailDetails, read:true}));
        }
        Navigate(`/details/${type}/${id}`);
        toast.remove();
    }
    return (
        <tr className="border-y-1 border-zinc-300 cursor-pointer" onClick={handleMailOpening}>
            <td>{!read && "🔵 "}{"  "}{sender}</td>
            <td className='font-semibold'>{subject}</td>
            <td>{message?.slice(0,25)+"..."}</td>
            <td>12 aug 2022</td>
            <td>
                <button className='btn btn-primary'>Delete</button>
            </td>
        </tr>
    )
}

export default MailList