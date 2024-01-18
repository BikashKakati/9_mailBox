import React, { useEffect } from 'react'
import Wrapper from '../../components/ui/Wrapper'
import MailList from '../../components/ui/MailList'
import MailTable from '../../components/ui/MailTable'
import { useDispatch, useSelector } from 'react-redux'
import { getSentMails } from '../../services/redux/api/mailsThunk'

const Inbox = () => {
  const { recievedMails } = useSelector(state => state.mail);
  const { currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <MailTable>
        {
          !!recievedMails.length &&
          recievedMails?.map(mail => {
            return <MailList key={mail.id} mailDetails={mail} type="recieve"/>
          })
        }
      </MailTable>
    </Wrapper>
  )
}

export default Inbox