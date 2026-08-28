import React from 'react'
import { IoSendSharp } from 'react-icons/io5'

function DiscussionCommunities() {
  return (
    <main className='w-full px-16'>

      <div className="flex mx-auto w-full max-w-7xl gap-12 mt-24">
        <div className="w-24 h-24 rounded-full border border-border-header bg-black">
          <img src="#" alt="#" className="" />
        </div>
        <div className="flex items-center w-full justify-between px-16 py-10 border border-border-header round-8">
          <input 
            type="text" 
            placeholder='Start a discussion...'
            className='f-14 text-font-secondary'
          />
          <IoSendSharp className='text-primary'/>
        </div>
      </div>


      <section>
        <div className="flex mx-auto w-full max-w-7xl gap-12 mt-24">
          <div className="w-24 h-24 rounded-full border border-border-header bg-black">
            <img src="#" alt="#" className="" />
          </div>
          <div className="flex flex-col items-start w-full justify-between px-16 py-12 border border-border-header round-8">
            <div className="flex items-center gap-6">
              <span className="f-14 text-dark-primary font-semibold">Ahmad Fauzan</span>
              <span className="text-xs text-font-secondary">1d ago</span>
            </div>
            <span className="f-14 text-font-primary">Welcome everyone to our community! Excited to have so many new members join this month.</span>
          </div>
        </div>
      </section>

    </main>
  )
}

export default DiscussionCommunities