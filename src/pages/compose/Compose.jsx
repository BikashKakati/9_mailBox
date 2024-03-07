import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../../components/ui/Wrapper';
import { recievedMailHandler, sentMailHandler } from '../../services/redux/api/mailsThunk';
import { getCurrentTime } from '../../utils/getCurrentTime';

const Compose = () => {
  const mailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.auth);

  async function handleMailSubmit(e) {
    e.preventDefault();
    const customFormattedDate = getCurrentTime();
    const mail = mailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    if (!mail.length) {
      toast.error("Please specify at least one recipient.");
      return;
    }
    const mailDetails = {
      id: "user" + String(Date.now()),
      sender: currentUser.email,
      to: mail,
      subject,
      message,
      timeStamp:customFormattedDate,
    }
    dispatch(recievedMailHandler(mailDetails));
    dispatch(sentMailHandler(mailDetails));
    toast.remove();
    toast.success("email sent successfully!");
    e.target.reset();
  }

  return (
    <Wrapper>
      <div className="max-w-[35rem] mx-auto bg-base-100 shadow-md">
        <p className="px-5 py-3 bg-green-100">New Message</p>
        <form className='px-4 pb-4' onSubmit={handleMailSubmit}>
          <input type="email" className="w-full pt-4  border-b-[1px] border-base-300 outline-none bg-base-100" placeholder='To' ref={mailRef} />
          <input type="text" className="w-full pt-4 border-b-[1px] border-base-300 outline-none bg-base-100" placeholder='Subject' ref={subjectRef} />
          <textarea rows="10" className='w-full pt-4 outline-none resize-none bg-base-100' placeholder='Write message' ref={messageRef} />
          <button type='submit' className='btn btn-info w-24'>Send</button>
        </form>
      </div>
    </Wrapper>
  )
}

export default Compose