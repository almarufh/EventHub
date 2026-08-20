import React, { useEffect, useState } from 'react'
import { GoPerson } from 'react-icons/go'
import { LuCalendar, LuLogOut } from 'react-icons/lu'
import { MdOutlineExplore } from 'react-icons/md'
import { RxPeople } from 'react-icons/rx'
import { TbHome } from 'react-icons/tb'
import {Link, NavLink, useNavigate } from 'react-router'
import { remove } from '../../utils/helper/storage'
import { getUserById } from '../../utils/user'

function NavMobile({user, setUser, setShowNav, showNav}) {
    const navigate = useNavigate()
    const [getActive, setActive] = useState({})
    const [nav, setNav] = useState({
        auth: "Sign In"
    })
    
    useEffect(()=> {
        if(user.isActive){
            setActive(getUserById(user.id))
            setNav((prevNav)=>{
                return {
                    ...prevNav,
                    auth: "Sign Out"
                }
            })
        } else {
            setNav((prevNav)=>{
                return {
                    ...prevNav,
                    auth: "Sign In"
                }
            })
        }
    },[])

    return (
        <>
    <div className="flex flex-col">
        {user.isActive ? (<div className="flex gap-12 py-12 px-16 items-center">
            <div className="border border-border-header w-36 h-36 rounded-full items-center justify-center flex">
                <span className="text-primary f-14 font-bold">{getActive?.name?.charAt(0)}</span>
            </div>
            <div className="flex flex-col">
                <span className='f-14 font-bold text-dark-primary'>{getActive?.name}</span>
                <span className='text-xs text-font-secondary'>{getActive?.email}</span>
            </div>
        </div>) : (
            <span className='text-font-secondary text-xs pl-16 pr-30 pt-10'>Browsing as guest</span>
        )}
        <ul className='flex flex-col'>
            <li
                className='md:hidden w-full'
            >
                <NavLink
                to="/explore"
                end
                className={({ isActive }) =>
                    `flex gap-12 f-14 pt-14 px-16 pb-10 items-center ${
                    isActive ? "bg-primary6 text-primary" : "text-font-fivethy"
                    }`
                }
                >
                <TbHome/>
                <span>Explore</span>
                </NavLink>
            </li>
            <li
                className='md:hidden'
            >
                <NavLink
                to="/events"
                end
                className={({ isActive }) =>
                    `flex gap-12 f-14 pt-14 px-16 pb-10 items-center ${
                    isActive ? "bg-primary6 text-primary" : "text-font-fivethy"
                    }`
                }
                >
                <MdOutlineExplore/>
                <span>Events</span>
                </NavLink>
            </li>
        
            <li
                className='md:hidden'
            >
                <NavLink
                to="/communities"
                end
                className={({ isActive }) =>
                    `flex gap-12 f-14 pt-14 px-16 pb-10 items-center ${
                    isActive ? "bg-primary6 text-primary" : "text-font-fivethy"
                    }`
                }
                >
                <RxPeople/>
                <span>Communities</span>
                </NavLink>
            </li>
            
            {user.isActive && (<li
                className='md:hidden'
            >
                <NavLink
                to="/myevents"
                end
                className={({ isActive }) =>
                    `flex gap-12 f-14 pt-14 px-16 pb-10 items-center ${
                    isActive ? "bg-primary6 text-primary" : "text-font-fivethy"
                    }`
                }
                >
                <LuCalendar/>
                <span>My Events</span>
                </NavLink>
            </li>)}

            { user.isActive && <li>
                <NavLink
                to="/myprofile"
                end
                className={({ isActive }) =>
                    `flex gap-12 f-14 pt-14 px-16 pb-10 items-center ${
                    isActive ? "bg-primary6 text-primary" : "text-font-fivethy"
                    }`
                }
                >
                <GoPerson/>
                <span>My Profile</span>
                </NavLink>
            </li>}
            <li
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    setShowNav(!showNav);

                    if (nav.auth === "Sign In") {
                        navigate("/auth/signin");
                    } else {
                        remove("actived");
                        setUser({});
                        setNav((prevNav) => ({
                            ...prevNav,
                            auth: "Sign In"
                        }));
                    }
                }}

                className={`${user.isActive ? "text-font-error" : "text-primary"} flex gap-12 px-16 py-10 items-center f-14 font-bold bg-primary6 cursor-pointer`}>
                {user.isActive ? <LuLogOut/> : <GoPerson/>}
                <span>{nav.auth}</span>
            </li>
        </ul>
    </div>
    </>
  )
}

export default NavMobile