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
        <tr className="border-y-1 border-zinc-300 cursor-pointer flex flex-col md:table-row *:leading-3 md:*:leading-none *:py-1 md:*:py-4" onClick={handleMailOpening}>
            <td className="mt-2 md:mt-0">{!read && "🔵"}{"  "}{mail}</td>
            <td className='font-semibold capitalize'>{subject?.length>30 ? subject?.slice(0,30)+"...":subject}</td>
            <td className=''>{message?.length>30 ? message?.slice(0,30)+"...":message}</td>
            <td className='text-zinc-400 text-sm'>{timeStamp && timeStamp}</td>
            <td className='my-2'>
                <button className='btn btn-info btn-xs' onClick={handleMailDelete}>Delete</button>
            </td>
        </tr>
    )
}

export default MailList