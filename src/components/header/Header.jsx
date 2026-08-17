import { FiBell, FiMoon, FiShield } from "react-icons/fi"
import { RxDashboard } from "react-icons/rx"
import Logo from "./Logo.jsx";
import actived from "../../utils/helper/actived.js";
import { useEffect, useState } from "react";
import CreateNavbar from "./CreateNavbar.jsx";
import { LuAlignJustify } from "react-icons/lu";
import { GoX } from "react-icons/go";
import { useNavigate } from "react-router";
import NavMobile from "./NavMobile.jsx";

function Header() {
  const [user, setUser] = useState({})
  const [showNav, setShowNav] = useState(false)

  const navigate = useNavigate()
  
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


  function CreateProfile ({data}) {
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
          <>
          <div 
            className="hidden md:flex items-center justify-center border border-font-primary w-32 h-32 rounded-full overflow-hidden cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              setShowNav(!showNav)
            }}
          >
            <img className="object-cover" src="/Dina Rahayu.svg" alt="L" />
          </div>
          <div
            onClick={(e)=> {
              e.preventDefault()
              setShowNav(!showNav)
            }}
            className={`
                cursor-pointer
              `}
          >
            { showNav ? 
            (<GoX className={`
                flex md:hidden text-gray-700 text-lg
              `} /> 
            ) :(<LuAlignJustify className="flex md:hidden text-gray-700 text-lg" />)}
          </div>
          </>
        ) : (
          <>
          <button
            onClick={(e)=> {
              e.preventDefault()
              navigate("/auth/signin")
            }}
            className="hidden md:flex f-14 font-semibold px-16 py-6 bg-primary rounded-lg cursor-pointer"
          >Sign In</button>
          <div
            onClick={(e)=> {
              e.preventDefault()
              setShowNav(!showNav)
            }}
            className={`
                cursor-pointer
              `}
          >
            { showNav ? 
            (<GoX className={`
                flex md:hidden text-gray-700 text-lg
              `} /> 
            ) :(<LuAlignJustify className="flex md:hidden text-gray-700 text-lg" />)}
          </div>
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
      
      {showNav && <div className={`
        flex flex-col py-8 bg-light border border-border-header rounded-xl
        ${false 
          ? "fixed inset-0 m-auto w-96 h-fit z-50" 
          : "absolute top-40 md:top-55 right-10 md:right-0 w-fit z-40"
        }
        `}>
          <NavMobile user={user} setUser={setUser} setShowNav={setShowNav} showNav={showNav} />
      </div>}
      <CreateProfile data={user}/>
    </header>
  )
}

export default Header