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
    // const date = new Date(timeStamp.seconds*1000).toLocalTimeString();

    async function handleMailOpening(){
        toast.loading("Loading...");
        if(!read){
            await dispatch(recievedMailHandler({...mailDetails, read:true}));
        }
        Navigate(`/details/${type}/${id}`);
        toast.remove();
    }
    function handleMailDelete(e){
        e.stopPropagation();
        dispatch(deleteMails({type,id}))
    }

    return (
        <tr className="border-y-1 border-zinc-300 cursor-pointer" onClick={handleMailOpening}>
            <td >{!read && "🔵"}{"  "}{mail}</td>
            <td className='font-semibold capitalize'>{subject}</td>
            <td>{message?.slice(0,25)+"..."}</td>
            <td>{timeStamp && timeStamp}</td>
            <td className='z-20'>
                <button className='btn btn-info btn-xs' onClick={handleMailDelete}>Delete</button>
            </td>
        </tr>
    )
}

export default MailList