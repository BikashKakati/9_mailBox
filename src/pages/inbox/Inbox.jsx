import React from 'react'
import { useSelector } from 'react-redux'
import MailList from '../../components/ui/MailList'
import MailTable from '../../components/ui/MailTable'
import Wrapper from '../../components/ui/Wrapper'

const Inbox = () => {
  const { recievedMails } = useSelector(state => state.mail);

  return (
    <Wrapper>
      
      <MailTable>
        {
          !!recievedMails.length &&
          recievedMails?.map(mail => {
            return <MailList key={mail.id} mailDetails={mail} type="recievedMails"/>
          })
        }
      </MailTable>
      {!recievedMails.length && <p className='mt-10 text-2xl font-semibold text-zinc-500 text-center'>Inbox is empty</p>}
    </Wrapper>
  )
}

export default Inbox