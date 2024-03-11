import { collection, onSnapshot } from 'firebase/firestore'
import React, { Suspense, lazy, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from "react-router-dom"
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/navbar/Navbar'
import { db } from './services/firebase-config'
import { getSentMails } from './services/redux/api/mailsThunk'
import { getRecievedMail } from './services/redux/slices/mailsSlice'

const Login = lazy(() => import('./pages/log/Login'))
const Signup = lazy(() => import('./pages/log/Signup'))
const Inbox = lazy(() => import('./pages/inbox/Inbox'))
const Compose = lazy(() => import('./pages/compose/Compose'))
const Details = lazy(() => import('./pages/details/Details'))
const Sidebar = lazy(() => import('./components/sidebar/Sidebar'))
const Sent = lazy(() => import('./pages/sent/Sent'))

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
    <div className='min-h-dvh'>
      <Navbar />
      <Toaster position='top-center' />
      <Suspense
        fallback={
          <span className="loading loading-spinner loading-lg block min-h-dvh m-auto"></span>
        }
      >
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
      </Suspense>
    </div>
  )
}

export default App