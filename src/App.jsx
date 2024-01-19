import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from "react-router-dom"
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import LogIn from './pages/Log/Login'
import SignUp from './pages/Log/Signup'
import Compose from './pages/compose/Compose'
import Details from './pages/details/Details'
import Inbox from './pages/inbox/Inbox'
import Sent from './pages/sent/Sent'
import { db } from './services/firebase-config'
import { getRecievedMail } from './services/redux/slices/mailsSlice'
import { getSentMails } from './services/redux/api/mailsThunk'

const App = () => {
  const { currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    let subscribe = true;
    if (subscribe) {
      dispatch(getSentMails());

      const docRef = collection(db, `recievedMails/${currentUser?.email}/mails`);
      onSnapshot(docRef, (snapshot) => {
        dispatch(getRecievedMail(snapshot.docs.map((doc) => doc.data())));
      });
    }
    return () => {
      subscribe = false
    }
  }, [currentUser])

  return (
    <div className=' bg-base-200 min-h-dvh'>
      <Navbar />
      <Toaster position='top-center' />
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<PrivateRoute><Sidebar /></PrivateRoute>}>
          <Route path='/' element={<Inbox />} />
          <Route path='/compose' element={<Compose />} />
          <Route path='/sent' element={<Sent />} />
          <Route path='/details/:type/:id' element={<Details />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App