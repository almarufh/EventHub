import React from 'react'
import Logo from '../../components/header/Logo'
import { Link } from 'react-router'
import { LuEye, LuEyeClosed } from 'react-icons/lu'
import { FaGithub, FaGoogle } from 'react-icons/fa'

function SignUp() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className="w-8/10 md:w-6/10">
        <div className='flex md:hidden'>
          <Logo/>
        </div>

        <div className="pt-32 w-full">
          <span className='text-2xl font-bold text-dark-primary'>Create your account</span>
          <div className="pt-4">
            <span className='f-14 text-font-forthy'>Already have an account? </span>
            <Link className='f-14 text-primary font-medium' to="/auth/signin">Sign in</Link>
          </div>
        </div>

        <div className="flex pt-28 justify-between gap-12">
          <div className='my-center gap-8 f-14 text-font-fivethy px-16 py-10 border rounded-lg border-border-header w-full'>
            <FaGoogle/>
            <span>Google</span>
          </div>
          <div className='my-center gap-8 f-14 text-font-fivethy px-16 py-10 border rounded-lg border-border-header w-full'>
            <FaGithub/>
            <span>GitHub</span>
          </div>
        </div>

        <div className='grid grid-cols-[1fr_auto_1fr] items-center gap-12 pt-20'>
          <div className='w-full border-t h-0 border-border-header'></div>
          <span className='text-xs text-font-secondary whitespace-nowrap'>or continue with email</span>
          <div className="w-full border-t h-0 border-border-header"></div>
        </div>

        <form className='pt-20'>
          <div className='flex flex-col gap-6'>
            <label 
              className='f-14 text-font-fivethy' 
              htmlFor="name"
            >Full Name</label>
            <input 
              className='bg-light rounded-lg border border-border-header py-10 px-12 f-14 text-font-secondary outline-none'
              type="text" 
              name="name" 
              id="name" 
              placeholder="Alex Kim" 
            />
            <span className='text-font-error text-xs'>Email is required</span>
          </div>

          <div className='flex flex-col gap-6 py-12'>
            <label 
              className='f-14 text-font-fivethy' 
              htmlFor="email"
            >Email address</label>
            <input 
              className='bg-light rounded-lg border border-border-header py-10 px-12 f-14 text-font-secondary outline-none'
              type="text" 
              name="email" 
              id="email" 
              placeholder="alex@example.com" 
            />
            <span className='text-font-error text-xs'>Email is required</span>
          </div>

          <div className='flex flex-col gap-6 pt-12'>
            <label
              className='f-14 text-font-fivethy'
              htmlFor="password"
            >Password</label>
            <div className="flex border rounded-lg px-12 border-border-header items-center justify-between">
              <input
                className='bg-light py-10 f-14 text-font-secondary w-full outline-none'
                type="password"
                name="password"
                id="password"
                placeholder="At least 8 characters"
              />
              {false ? (<LuEye/>) : (<LuEyeClosed/>)}
            </div>
            <span className='text-font-error text-xs'>Password is required</span>
          </div>

          <div className='flex flex-col gap-6 pt-12'>
            <label
              className='f-14 text-font-fivethy'
              htmlFor="confirm"
            >Confirm Password</label>
            <div className="flex border rounded-lg px-12 border-border-header items-center justify-between">
              <input
                className='bg-light py-10 f-14 text-font-secondary w-full outline-none'
                type="password"
                name="confirm"
                id="confirm"
                placeholder="Re-enter your password"
              />
              {false ? (<LuEye/>) : (<LuEyeClosed/>)}
            </div>
            <span className='text-font-error text-xs'>Password is required</span>
          </div>

          <div className='flex gap-6 py-12'>
            <input 
              className='bg-light border border-border-header py-10 px-12 f-14 text-font-secondary outline-none'
              type="radio" 
              name="name" 
              id="name" 
              placeholder="Alex Kim" 
            />
            <label 
              className='text-xs text-font-forthy' 
              htmlFor="name"
            >I agree to the <span className="text-xs text-primary">Terms of Service</span> and Privacy <span className="text-xs text-primary">Policy</span></label>
          </div>
          
          <button
            className='bg-primary py-12 w-full my-center rounded-lg f-14 text-light font-semibold'
          >Create account</button>
        </form>

      </div>
    </div>
  )
}

export default SignUp