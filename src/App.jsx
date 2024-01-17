import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import LogIn from './pages/Log/Login'
import SignUp from './pages/Log/Signup'
import Compose from './pages/compose/Compose'
import Details from './pages/details/Details'
import Inbox from './pages/inbox/Inbox'
import Sent from './pages/sent/Sent'
import { Toaster } from 'react-hot-toast'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <div className=' bg-base-200 min-h-dvh'>
      <Navbar />
      <Toaster position='top-center'/>
      <Routes>
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/' element={<PrivateRoute><Sidebar /></PrivateRoute>}>
          <Route path='/' element={<Inbox />} />
          <Route path='/compose' element={<Compose />} />
          <Route path='/sent' element={<Sent />} />
          <Route path='/details/:id' element={<Details />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App