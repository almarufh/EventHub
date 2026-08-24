import { GoPerson } from 'react-icons/go'
import { LuLogOut } from 'react-icons/lu'
import { NavLink, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slice/user'
import { RxDashboard } from 'react-icons/rx'
import { FiShield } from 'react-icons/fi'

function NavMobile({props}) {
    const {listNavbar, setShowNav, showNav} = props
    const dispatch = useDispatch()
    const { isDark, actived, userExist } = useSelector(state => state.eventHub)

    const {name, email} = userExist.data
    const navigate = useNavigate()
 
    return (
    <div className={` ${isDark 
        ? "" 
        : "flex flex-col"}
    `}>
        {actived.isActive 
        ? <div className={` ${isDark 
            ? "" 
            : "flex gap-12 py-12 px-16 items-center"}
        `}>
            <div className= {` ${isDark 
                ? "" 
                : "border border-border-header w-36 h-36 rounded-full items-center justify-center flex"}
            `}>
                <span className={`${isDark 
                    ? "" 
                    : "text-primary f-14 font-bold"}`}
                >{name?.charAt(0)}</span>
            </div>

            <div className={`${isDark 
                ? "" 
                : "flex flex-col"}
            `}>
                <span className={`${isDark 
                    ? "" 
                    : "f-14 font-bold text-dark-primary"}
                `}>{name}</span>
                <span className={`${isDark 
                    ? "" 
                    : "text-xs text-font-secondary"}
                `}>{email}</span>
            </div>
        </div> 
        : <span className={` ${isDark 
            ? "" 
            : "text-font-secondary text-xs pl-16 pr-30 pt-10"}
        `}>Browsing as guest</span>
        }

        <ul className={` ${isDark 
            ? "" 
            : "flex flex-col"}
        `}>
            {listNavbar.map((m,i)=> {
                if(m.isShow) {
                    const IconComponent = m.icon
                    return (
                        <NavLink
                            key={i}
                            to={m.link} 
                            className={({isActive}) =>` ${isDark 
                            ? "" 
                            : "md:hidden w-full"}
                            ${isActive ? "bg-primary6 text-primary" : "text-font-fivethy"}
                        `}>
                            <li
                            className={` ${isDark 
                                ? "" 
                                : "flex gap-12 f-14 pt-14 px-16 pb-10 items-center"}
                            `}>
                                <IconComponent />
                                <span>{m.navbar}</span>
                            </li>
                        </NavLink>
                    )
                }
            })}

            { actived.role === "organizer" &&
                <NavLink
                    to={"#"} 
                    className={ ({isActive}) => `${isDark 
                    ? "" 
                    : "md:hidden w-full"}
                    ${isActive ? "bg-primary6 text-primary" : "text-font-fivethy"}
                `}>
                    <li className={` ${isDark 
                        ? "" 
                        : "flex gap-12 f-14 pt-14 px-16 pb-10 items-center"}
                    `}>
                        <RxDashboard/>
                        <span>Dashboard</span>
                    </li>
                </NavLink>
            }

            { actived.role === "admin" &&
                <NavLink
                    to={"#"} 
                    className={ ({isActive}) => `${isDark 
                    ? "" 
                    : "md:hidden w-full"}
                    ${isActive ? "bg-primary6 text-primary" : "text-font-fivethy"}
                `}>
                    <li className={` ${isDark 
                        ? "" 
                        : "flex gap-12 f-14 pt-14 px-16 pb-10 items-center"}
                    `}>
                        <FiShield/>
                        <span>Admin</span>
                    </li>
                </NavLink>
            }
 
            <li
                className={`${actived.isActive ? "text-font-error" : "text-primary"} flex gap-12 px-16 py-10 items-center f-14 font-bold bg-primary6 cursor-pointer`}>
                {actived.isActive ? <LuLogOut/> : <GoPerson/>}
                {actived.isActive 
                    ? <span
                        onClick={(e)=> {
                            e.stopPropagation()
                            setShowNav(!showNav)
                            dispatch(logout())
                        }}
                    >Sign Out</span>
                    : <span
                        onClick={(e)=> {
                            e.stopPropagation()
                            setShowNav(!showNav)
                            navigate("/auth/signin")
                        }}
                    >Sign In</span>
                }
            </li>
        </ul>
    </div>
  )
}

export default NavMobile