import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../../components/ui/Wrapper';
import MailTable from '../../components/ui/MailTable';
import MailList from '../../components/ui/MailList';
import { getSentMails } from '../../services/redux/api/mailsThunk';

const Sent = () => {
  const {sentMails} = useSelector(state => state.mail);
  const {currentUser} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <MailTable>
        {
          !!sentMails.length &&
          sentMails.map(mail => {
            return <MailList key={mail.id} mailDetails={mail} type="sent"/>
          })
        }
      </MailTable>
    </Wrapper>
  )
}

export default Sent