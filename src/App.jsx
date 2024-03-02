import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from "react-router-dom"
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Compose from './pages/compose/Compose'
import Details from './pages/details/Details'
import Inbox from './pages/inbox/Inbox'
import Sent from './pages/sent/Sent'
import { db } from './services/firebase-config'
import { getRecievedMail } from './services/redux/slices/mailsSlice'
import { getSentMails } from './services/redux/api/mailsThunk'
import Login from './pages/log/Login'
import Signup from './pages/log/Signup'

const App = () => {
  const { currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    let subscribe = true;
    if (subscribe) {
      dispatch(getSentMails());
      // snapshot function has been used here to imediately update the recieved mail state whenever any data change in firebase store. For the first mounting stage only useEffect used, after that the useEffect never running when snapshot function runs.
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
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
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