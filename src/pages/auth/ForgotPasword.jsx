import React from 'react'
import Logo from '../../components/header/Logo'
import { useNavigate } from 'react-router'
import { LuEye, LuEyeClosed } from 'react-icons/lu'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { checkEmailUser } from '../../utils/user.js'

function ForgotPasword() {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const navigate = useNavigate()

  const sendLink = () => {
    console.log("success")
    navigate("/auth/success")
    
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className="w-8/10 md:w-6/10">
        <div className='flex md:hidden'>
          <Logo/>
        </div>

        <div className="pt-32 w-full">
          <span className='text-2xl font-bold text-dark-primary'>Reset your password</span>
          <div className="pt-4">
            <span className='f-14 text-font-forthy'>Enter your email and we'll send a link. </span>
          </div>
        </div>

        <form onSubmit={handleSubmit(sendLink)} className='pt-20'>
          <div className='flex flex-col gap-6 py-12'>
            <label 
              className='f-14 text-font-fivethy' 
              htmlFor="email"
            >Email address</label>
            <input 
              className='bg-light rounded-lg border border-border-header py-10 px-12 f-14 text-font-secondary outline-none'
              type="email" 
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Format email tidak valid"
                },
                  validate: (value)=>{
                    const {status, message} = checkEmailUser(value)
                    return status || message
                  }
              })} 
              id="email" 
              placeholder="alex@example.com" 
            />
            <span className={`${errors?.email ? "opacity-100" : "opacity-0"} text-font-error text-xs`}>{errors.email?.message || "error"}</span>
          </div>
          
          <button
            className='bg-primary py-12 w-full my-center rounded-lg f-14 text-light font-semibold cursor-pointer'
          >Send reset link</button>
        </form>

      </div>
    </div>
  )
}

export default ForgotPasword