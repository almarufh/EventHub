import Logo from "./Logo.jsx";
import { LuCalendar} from 'react-icons/lu'
import { MdOutlineExplore } from 'react-icons/md'
import { RxPeople } from 'react-icons/rx'
import { TbHome } from 'react-icons/tb'
import CreateNavbar from "./CreateNavbar.jsx";
import { useNavigate } from "react-router";
import NavMobile from "./NavMobile.jsx";
import { useDispatch, useSelector } from "react-redux";
import CreateProfile from "./CreateProfile.jsx";
import { useState } from "react";
import { GoPerson } from "react-icons/go";

function Header() {
  const dispatch = useDispatch()
  const { isDark, actived } = useSelector(state => state.eventHub)
  const [user, setUser] = useState({})
  const [showNav, setShowNav] = useState(false)

  // Navbar
  const listNavbar = [
    { 
      navbar: "Explore", 
      link: "/explore", 
      isDekstop: true ,
      isShow: true,
      icon: TbHome
    },
    { 
      navbar: "Events", 
      link: "/events", 
      isDekstop: true ,
      isShow: true,
      icon: MdOutlineExplore
    },
    { 
      navbar: "Communities", 
      link: `/communities`, 
      isDekstop: true ,
      isMobile: true,
      isShow: true,
      icon: RxPeople
    },
    { 
      navbar: "My Events", 
      link: `/myevents/${actived.id}`, 
      isDekstop: true ,
      isShow: actived.isActive,
      icon: LuCalendar
    },
    { 
      navbar: "My Profile", 
      link: `/myprofile/${actived.id}`, 
      isDekstop: false ,
      isShow: actived.isActive,
      icon: GoPerson
    }
  ];

  const props = {
    showNav,
    setShowNav,
    listNavbar
  }

  return (
    <header className= {` ${isDark 
        ? "" 
        : "fixed top-0 left-0 z-50 px-24 gap-8 w-full py-6 md:py-12 flex items-center border-b border-border-header justify-between bg-light text-light"}
      `}
    >
      <div className = {` ${isDark 
        ? "" 
        : "flex"}
      `}
      >
        <Logo/>
        <CreateNavbar props={props}/>
      </div>

      {showNav && 
      <div className={` ${isDark 
        ? "" 
        : "flex flex-col py-8 bg-light border border-border-header rounded-xl"}
        ${ false 
          ? "fixed inset-0 m-auto w-96 h-fit z-50" 
          : "absolute top-40 md:top-55 right-10 md:right-0 w-fit z-40"}
      `}>
        <NavMobile props={props} />
      </div>}
      <CreateProfile props={props}/>
    </header>
  )
}

export default Header