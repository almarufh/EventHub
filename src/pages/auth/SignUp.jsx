import { useState } from 'react'
import Logo from '../../components/header/Logo'
import { Link, useNavigate } from 'react-router'
import { LuEye, LuEyeClosed } from 'react-icons/lu'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { createUser, delMessage } from '../../redux/slice/users.js'
import { useRedux } from '../../hooks/useRedux.jsx'

function SignUp() {
  // Redux Persist
  const {dispatch, users, state} = useRedux()
  // state
  const {register, handleSubmit, formState: { errors }} = useForm()
  const [show, setShow] = useState({
    password: {
      value: false,
      type: "password"
    }, 
    confirm: {
      value: false,
      type: "password"
    }
  })

  const confirmShow = () => {
    setShow((prevState) => ({
      ...prevState,
      confirm: {
        value: !prevState.confirm.value,
        type: prevState.confirm.value ? "password" : "text"
      }
    }));
  };

  const passwordShow = () => {
    setShow((prevState) => ({
      ...prevState,
      password: {
        value: !prevState.password.value,
        type: prevState.password.value ? "password" : "text"
      }
    }));
  };

  const navigate = useNavigate()
  async function saveUser(e) {
    try {
      let user = {
        name: e.name,
        email: e.email.toLowerCase(),
        password: e.password,
        // password: atob(e.password),
        location: null,
        bio: null,
        isAttendee: true,
        status: "active",
        profesionals: {
            role: "attendee",
            job: null,
            office: null
        },
        communitys: [],
        events: [],
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      }
  
      // check admin
      const admin = JSON.parse(import.meta.env.VITE_ADMIN)
      admin.forEach(a => {
          if(a === user.email) {
              user.profesionals.role = "admin"
          }
      });    
      
      // check admin
      const organizer = JSON.parse(import.meta.env.VITE_ORGANIZER)
      organizer.forEach(a => {
          if(a === user.email) {
              user.profesionals.role = "organizer"
          }
      });
      
      await dispatch(createUser(user)).unwrap()

      if (state.getState().users.isSuccess) {
        navigate("/auth/signin")
      }
  
    } catch (error) {
      console.log(error)
    }
  }

  const deletMessage = () => {
    dispatch(delMessage())
  }

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

        <form 
          className='pt-20'
          onSubmit={handleSubmit(saveUser)}
        >
          <div className='flex flex-col gap-6'>
            <label 
              className='f-14 text-font-fivethy' 
              htmlFor="name"
            >Full Name</label>
            <input 
              onFocus={deletMessage}
              className='bg-light rounded-lg border border-border-header py-10 px-12 f-14 text-font-secondary outline-none'
              type="text" 
              {...register("name", { required: "Full name is required" })} 
              id="name" 
              placeholder="Alex Kim" 
            />
            <span className={`transition-opacity duration-200 ${errors.name ? "opacity-100" : "opacity-0"} text-font-error text-xs`}>{errors.name?.message}</span>
          </div>

          <div className='flex flex-col gap-6 py-12'>
            <label 
              className='f-14 text-font-fivethy' 
              htmlFor="email"
            >Email address</label>
            <input 
              onFocus={deletMessage}
              className='bg-light rounded-lg border border-border-header py-10 px-12 f-14 text-font-secondary outline-none'
              type="email" 
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Format email tidak valid"
                }
              })} 
              id="email" 
              placeholder="alex@example.com" 
            />
            <span className={`${errors?.email ? "opacity-100" : "opacity-0"} text-font-error text-xs`}>{errors.email?.message || "error"}</span>
          </div>

          <div className='flex flex-col gap-6'>
            <label
              className='f-14 text-font-fivethy'
              htmlFor="password"
            >Password</label>
            <div className="flex border rounded-lg px-12 border-border-header items-center justify-between">
              <input
                onFocus={deletMessage}
                className='bg-light py-10 f-14 text-font-secondary w-full outline-none'
                type={show.password.type}
                {...register("password", {required: "Password is required", minLength:{
                  value: 8,
                  message: "Password minimal 8 karakter"
                }})}
                id="password"
                placeholder="At least 8 characters"
              />
              <div 
                onClick={passwordShow}
                className='cursor-pointer'
              >{show.password.value ? (<LuEye/>) : (<LuEyeClosed/>)}</div>
            </div>
            <span className={`${errors?.password ? "opacity-100" : "opacity-0"} text-font-error text-xs`}>{errors.password?.message || "error"}</span>
          </div>

          <div className='flex flex-col gap-6 pt-12'>
            <label
              className='f-14 text-font-fivethy'
              htmlFor="confirm"
            >Confirm Password</label>
            <div className="flex border rounded-lg px-12 border-border-header items-center justify-between">
              <input
                onFocus={deletMessage}
                className='bg-light py-10 f-14 text-font-secondary w-full outline-none'
                type={show.confirm.type}
                {...register("confirm", {
                  validate: (value, formValues) => value === formValues.password || "Password do not match"
                })}
                id="confirm"
                placeholder="Re-enter your password"
              />
              <div 
                onClick={confirmShow}
                className='cursor-pointer'
              >{show.confirm.value ? (<LuEye/>) : (<LuEyeClosed/>)}</div>
            </div>
            <span className={`${errors?.confirm ? "opacity-100" : "opacity-0"} text-font-error text-xs`}>{errors.confirm?.message || "error"}</span>
          </div>

          <div className='flex gap-6 pt-12'>
            <input 
              className='bg-light border border-border-header py-10 px-12 f-14 text-font-secondary outline-none'
              type="checkbox" 
              {...register("accept", {required: "Persetujuan ini harus diaktifkan terlebih dahulu!"})} 
              id="accept" 
            />
            <label 
              className='text-xs text-font-forthy cursor-pointer' 
              htmlFor="accept"
            >I agree to the <span className="text-xs text-primary">Terms of Service</span> and Privacy <span className="text-xs text-primary">Policy</span></label>
          </div>
          
          <div className='mt-2 min-h-28'>
            {errors?.accept && <span className={`${errors?.accept ? "opacity-100" : "opacity-0"} text-font-error text-xs flex`}>{errors.accept?.message || "error"}</span>}
            {users.isError && <span className={`${users.isError ? "opacity-100" : "opacity-0"} text-font-error text-xs flex justify-center mb-2`}>{users?.message || "error"}</span>}
          </div>

          
          <button
            className='bg-primary py-12 w-full my-center rounded-lg f-14 text-light font-semibold cursor-pointer'
          >Create account</button>
        </form>

      </div>
    </div>
  )
}

export default SignUp