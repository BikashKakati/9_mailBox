import React from 'react'
import { Routes, Route } from "react-router-dom"
import Inbox from './pages/inbox/Inbox'
import Compose from './pages/compose/Compose'
import Sent from './pages/sent/Sent'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Details from './pages/details/Details'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Inbox />} />
          <Route path='/compose' element={<Compose />} />
          <Route path='/sent' element={<Sent />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </Sidebar>
    </div>
  )
}

export default App