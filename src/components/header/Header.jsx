import { FiBell, FiMoon, FiShield } from "react-icons/fi"
import { RxDashboard } from "react-icons/rx"
import { Link } from "react-router"
import Logo from "./Logo.jsx";
import actived from "../../utils/actived.js";
import { useEffect, useState } from "react";

function Header() {
  const data = {
    id: "BC-1786577627428",
    role: import.meta.env.VITE_ROLE
  }
  
  const [user, setUser] = useState({})
  
  useEffect(()=> {
    const isActived = actived()
    if (isActived.status) {
      setUser(isActived.data)
    } else {
      setUser(data)
    }
  }, [])
  
  function CreateNavbar ({role}) {
    
      const listNavbar = [
        { navbar: "Explore", link: "/explore" },
        { navbar: "Events", link: "/events" },
        { navbar: "Communities", link: "/communities" },
        { navbar: "My Events", link: "/myevents" },
      ];

      
      const listNavbarGuest = [
        { navbar: "Events", link: "#" },
        { navbar: "Communities", link: "#" }
      ];
      
      const currentNavbar = 
      user.role === "admin" || user.role === "attendee" || user.role === "organizer"
      ? listNavbar
      : listNavbarGuest;
      
      return (<nav>
        <ul className="flex w-full">
          {currentNavbar.map((n, i) => {
            return (
              <li 
              className="py-6 px-12 text-font-primary font-medium my-center"
                key={i}
              >
                <Link 
                  className="f-14"
                  to={n.link}
                  >{n.navbar}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
  
  function CreateProfile ({role}) {
    return (
      <div 
      className="flex items-center w-fit h-34 gap-8 justify-end justify-self-end"
      >
        {role === "admin" ? (
          <div
          className="flex items-center gap-6 round-8 py-6 px-12"
          >
          <FiShield/>
          <span>Admin</span>
        </div>
        ) : role === "organizer" ? (
          <div
          className="flex items-center gap-6 round-8 py-6 px-12 bg-[#FF5F2214]"
          >
            <RxDashboard className="text-primary"/>
            <span
              className="f-14 font-medium text-primary"
              >Dashboard</span>
          </div>
        ) : null}
        
        <FiBell />
        <FiMoon />
        <div className="border w-32 h-32 rounded-full">
          <img src="" alt="" />
        </div>
      </div>
    )
  }
  
  return (
    <header
    className='px-24 gap-8 max-w-1338 h-56 flex items-center border-b border-border-header justify-between bg-light'
    >
      <div 
        className="flex "
        >
        <Logo/>
        <CreateNavbar role={user.role}/>
      </div>
      <CreateProfile role={user.role}/>
    </header>
  )
}

export default Header