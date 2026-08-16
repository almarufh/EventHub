import { FiBell, FiMoon, FiShield } from "react-icons/fi"
import { RxDashboard } from "react-icons/rx"
import Logo from "./Logo.jsx";
import actived from "../../utils/helper/actived.js";
import { useEffect, useState } from "react";
import CreateNavbar from "./CreateNavbar.jsx";
import { LuAlignJustify } from "react-icons/lu";

function Header() {
  const [user, setUser] = useState({})
  
  useEffect(()=> {
    const isActived = actived()

    if (isActived.status) {
      setUser(isActived.data)
    }
    else {
      setUser({
        id: "BC-1786577627428",
        role: "guest",
        isActive: false
      })
    }
  }, [])

  console.log(user)
  
  function CreateProfile ({data}) {
    console.log("data User", data)
    return (
      <div 
      className="flex items-center w-fit h-34 gap-8 justify-end justify-self-end"
      >
        { data.role === "admin" ? (
          <div
          className="flex items-center gap-6 round-8 py-6 px-12"
          >
          <FiShield/>
          <span>Admin</span>
        </div>
        ) : data.role === "organizer" ? (
          <div
          className="flex items-center gap-6 round-8 py-6 px-12 bg-[#FF5F2214]"
          >
            <RxDashboard className="text-primary"/>
            <span
              className="f-14 font-medium text-primary"
              >Dashboard</span>
          </div>
        ) : null}

        
        { data.isActive 
          ? (<FiBell className="text-gray-700 text-lg" />)
          : (<span className="hidden md:flex text-xs text-font-secondary">Browsing as guest</span>)
        }

        <div className="p-8 rounded-lg">
          <FiMoon className="text-gray-700 text-lg" />
        </div>
        

        { data.isActive ? (
          <div className="border border-dark w-32 h-32 rounded-full">
            <img src="" alt="" />
          </div>
        ) : (
          <>
          <button
            className="hidden md:flex f-14 font-semibold px-16 py-6 bg-primary rounded-lg"
          >Sign In</button>
          <LuAlignJustify className="flex md:hidden text-gray-700 text-lg" />
          </>
        )}

      </div>
    )
  }
  
  return (
    <header
      className='fixed top-0 left-0 z-50 px-24 gap-8 w-full py-6 md:py-12 flex items-center border-b border-border-header justify-between bg-light text-light'
    >
      <div 
        className="flex "
        >
        <Logo/>
        <CreateNavbar user={user}/>
      </div>
      <CreateProfile data={user}/>
    </header>
  )
}

export default Header