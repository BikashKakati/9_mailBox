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
            <div className="bg-white mb-14 p-4 pb-10 md:pt-8 md:pb-12 md:px-16">
                <p className="pb-4 text-xl md:text-2xl capitalize border-b-[1px]">{mailDetail?.subject}</p>
                <div className="text-sm md:text-base font-semibold py-6 flex justify-between flex-wrap border-b-[1px]">
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