import React from 'react'
import Wrapper from '../../components/ui/Wrapper'
import MailList from '../../components/ui/MailList'
import MailTable from '../../components/ui/MailTable'

const Inbox = () => {
  return (
    <Wrapper>
      <MailTable>
        <MailList />
        <MailList />
      </MailTable>
    </Wrapper>
  )
}

export default Inbox