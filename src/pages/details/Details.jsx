import React from 'react'
import Wrapper from '../../components/ui/Wrapper'
import {useSelector} from "react-redux"
import { useParams } from 'react-router-dom';

const Details = () => {
   const {sentMails, recievedMails} = useSelector(state => state.mail);
   const {type, id:currentMailId} = useParams();
   const mailType = type === "recievedMails" ? recievedMails : sentMails;
   const mailDetail = mailType.find(mail => mail.id === currentMailId);
    return (
        <Wrapper>
            <div className="bg-white pt-8 pb-12 px-16">
                <p className="pb-4 text-2xl capitalize border-b-[1px]">{mailDetail?.subject}</p>
                <div className="font-semibold py-6 flex justify-between border-b-[1px]">
                    <span>{mailDetail?.sender}</span>
                    <span className="">{mailDetail?.timeStamp}</span>
                </div>
                <pre className="pt-4 text-sm text-wrap">
                    {mailDetail?.message}
                </pre>
            </div>
        </Wrapper>
    )
}

export default Details