import React from 'react';
import { useSelector } from 'react-redux';
import MailList from '../../components/ui/MailList';
import MailTable from '../../components/ui/MailTable';
import Wrapper from '../../components/ui/Wrapper';

const Sent = () => {
  const {sentMails} = useSelector(state => state.mail);

  return (
    <Wrapper>
      
      <MailTable>
        {
          !!sentMails.length &&
          sentMails.map(mail => {
            return <MailList key={mail.id} mailDetails={mail} type="sentMails"/>
          })
        }
      </MailTable>
      {!sentMails.length && <p className='mt-10 text-2xl font-semibold text-zinc-500 text-center'>No sent message present</p>}
    </Wrapper>
  )
}

export default Sent