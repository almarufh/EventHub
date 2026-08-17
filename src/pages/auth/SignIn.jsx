import React, { useState } from 'react'
import Logo from '../../components/header/Logo.jsx'
import { Link, useNavigate} from 'react-router'
import { LuEye, LuEyeClosed } from 'react-icons/lu'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { checkEmailUser, userLogin } from '../../utils/user.js'

function SignIn() {
  const {register, handleSubmit, formState: { errors }} = useForm()
  const [show, setShow] = useState({value: false, type: "password"})
  const [getUser, setUser] = useState({email: "", password: ""})
  const navigate = useNavigate()

  const passwordShow = () => {
    setShow((prevState) => ({
      ...prevState,
      ...{
        value: !prevState.value,
        type: prevState.value ? "password" : "text"
      }
    }));
  };

  function sign(e){
    const {status, user} = userLogin(e.email)
    if(status) {
      setUser(user)
      navigate("/explore")
    }
    console.log(getUser)
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className="w-8/10 md:w-6/10">
        <div className='flex md:hidden'>
          <Logo/>
        </div>

        <div className="pt-32 w-full">
          <span className='text-2xl font-bold text-dark-primary'>Welcome back</span>
          <div className="pt-4">
            <span className='f-14 text-font-forthy'>Don't have an account? </span>
            <Link className='f-14 text-primary font-medium' to="/auth/signup">Sign up</Link>
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

        <form 
          className='pt-20'
          onSubmit={handleSubmit(sign)}
        >
          <div className='flex flex-col gap-6'>
            <label 
              className='f-14 text-font-fivethy' 
              htmlFor="email"
            >Email address</label>
            <input 
              className='bg-light border border-border-header py-10 px-12 f-14 text-font-secondary outline-none rounded-lg'
              type="email" 
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Format email tidak valid"
                },
                validate: (value)=>{
                  const {status, user, message} = checkEmailUser(value)
                  if(user !== undefined){
                    setUser(user)
                  }
                  return status || "Email belum terdaftar"
                }
              })} 
              id="email" 
              placeholder="alex@example.com" 
            />
            <span className={`${errors?.email ? "opacity-100" : "opacity-0"} text-font-error text-xs`}>{errors.email?.message || "error"}</span>
          </div>

          <div className='flex flex-col gap-6 py-12'>
            <div className="flex justify-between items-center">
              <label
                className='f-14 text-font-fivethy'
                htmlFor="password"
              >Password</label>
              <Link 
                className='text-xs text-primary' 
                to="/auth/password"
              >Forgot password?</Link>
            </div>
            <div className="flex border border-border-header items-center justify-between rounded-lg overflow-hidden px-12">
              <input
                className='bg-light py-10 f-14 text-font-secondary w-full outline-none'
                type={show.type}
                {...register("password", {
                  required: "Password is required", minLength:{
                  value: 8,
                  message: "Password minimal 8 karakter"
                },
                validate: (value)=>{
                  return btoa(getUser.password) === value || "Wrong Password"
                }
              }
              )}
                id="password"
                placeholder="********"
              />
              <div 
                onClick={passwordShow}
                className='cursor-pointer'
              >{show.value ? (<LuEye/>) : (<LuEyeClosed/>)}</div>
            </div>
            <span className={`${errors?.password ? "opacity-100" : "opacity-0"} text-font-error text-xs`}>{errors.password?.message || "error"}</span>
          </div>
          <button
            className='bg-primary py-12 w-full my-center rounded-lg f-14 text-light font-semibold cursor-pointer'
          >Sign in</button>
        </form>

        <div className='my-center gap-5 pt-16'>
          <span className='text-xs text-font-secondary'>Just browsing?</span>
          <Link
            className='text-xs text-font-secondary underline'
            to="/"
          >Continue as guest →</Link>
        </div>

      </div>
    </div>
  )
}

export default SignIn