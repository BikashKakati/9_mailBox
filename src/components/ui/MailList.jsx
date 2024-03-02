import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteMails, recievedMailHandler } from '../../services/redux/api/mailsThunk';

const MailList = ({mailDetails, type}) => {
    const {sender, message, subject,id, read, to, timeStamp} = mailDetails;
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const mail = type === "sentMails" ? to : sender;

    async function handleMailOpening(){
        Navigate(`/details/${type}/${id}`);
        if(!read){
            dispatch(recievedMailHandler({...mailDetails, read:true}));
            toast.remove();
        }
    }
    function handleMailDelete(e){
        e.stopPropagation();
        dispatch(deleteMails({type,id}))
    }

    return (
        <tr className="border-y-1 border-zinc-300 cursor-pointer" onClick={handleMailOpening}>
            <td >{!read && "🔵"}{"  "}{mail}</td>
            <td className='font-semibold capitalize'>{subject?.length>30 ? subject?.slice(0,30)+"...":subject}</td>
            <td>{message?.length>30 ? message?.slice(0,30)+"...":message}</td>
            <td>{timeStamp && timeStamp}</td>
            <td className='z-20'>
                <button className='btn btn-info btn-xs' onClick={handleMailDelete}>Delete</button>
            </td>
        </tr>
    )
}

export default MailList