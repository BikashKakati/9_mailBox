import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../../components/ui/Wrapper';
import { logIn } from '../../services/redux/api/logThunk';

const Login = () =>{
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const Navigate = useNavigate();


  async function submitHandler(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await dispatch(logIn({ email, password }))
    Navigate("/");
  }

  return (
    <Wrapper>
      <div className='card max-w-[30rem] w-full shadow-md bg-base-100 mx-auto'>
        <div className="card-body items-center">
          <h2 className='card-title mb-6 text-2xl'>Log in</h2>
          <form onSubmit={submitHandler}>
            <div className="w-full card-actions gap-6">
              <input type="email" placeholder="email" className="input input-bordered w-full" ref={emailRef} />
              <input type="password" placeholder="******" className="input input-bordered w-full" ref={passwordRef} />
              <button type="submit" className='btn btn-info btn-block text-base'>{"Submit"}</button>
              <p className='text-center font-medium'>
                <Link to="/signup">Create an account!</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Login
