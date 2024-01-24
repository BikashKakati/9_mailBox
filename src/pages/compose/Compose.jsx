import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../../components/ui/Wrapper';
import { recievedMailHandler, sentMailHandler } from '../../services/redux/api/mailsThunk';

const Compose = () => {
  const mailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.auth);

  async function handleMailSubmit(e) {
    e.preventDefault();
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const customFormattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

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
    await dispatch(recievedMailHandler(mailDetails));
    await dispatch(sentMailHandler(mailDetails));
    toast.remove();
    toast.success("email sent successfully!");
    e.target.reset();
  }

  return (
    <Wrapper>
      <div className="max-w-[35rem] mx-auto bg-white shadow-md">
        <p className="px-5 py-3 bg-green-100">New Message</p>
        <form className='px-4 pb-4' onSubmit={handleMailSubmit}>
          <input type="email" className="w-full pt-4  border-b-[1px] border-zinc-300 outline-none" placeholder='To' ref={mailRef} />
          <input type="text" className="w-full pt-4 border-b-[1px] border-zinc-300 outline-none" placeholder='Subject' ref={subjectRef} />
          <textarea rows="10" className='w-full pt-4 outline-none resize-none' placeholder='Write message' ref={messageRef} />
          <button type='submit' className='btn btn-info w-24'>Send</button>
        </form>
      </div>
    </Wrapper>
  )
}

export default Compose