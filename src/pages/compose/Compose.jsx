import React, { useState } from 'react'
import Wrapper from '../../components/ui/Wrapper'

const Compose = () => {

  return (
    <Wrapper>
      <div className="max-w-[35rem] mx-auto bg-white">
        <p className="px-5 py-3 bg-green-100">New Message</p>
        <form className='px-4 pb-4'>
        <input type="email" className="w-full pt-4  border-b-[1px] border-zinc-300 outline-none" placeholder='To' />
        <input type="text" className="w-full pt-4 border-b-[1px] border-zinc-300 outline-none" placeholder='Subject'/>
        <textarea rows="10" className='w-full pt-4 outline-none resize-none'/>
        <button type='submit' className='btn btn-info w-24'>Send</button>
        </form>
      </div>
    </Wrapper>
  )
}

export default Compose