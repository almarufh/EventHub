import { FiBell, FiMoon, FiShield } from "react-icons/fi"
import { GoX } from "react-icons/go"
import { LuAlignJustify, LuSun } from "react-icons/lu"
import { RxDashboard } from "react-icons/rx"
import { NavLink, useNavigate } from "react-router"
import { tglDark } from "../../redux/slice/user"
import { useEventHub } from "../../hooks/useEventHub"
import { useRedux } from "../../hooks/useRedux"

function CreateProfile({props}) {
    const {
        dispatch,
        auth: {
            actived: {isActive, auth},
            user
        }
    } = useRedux()
    const {isDark} = useEventHub()

    const role = user?.profesionals?.role ?? null

    const {showNav, setShowNav} = props
    const navigate = useNavigate()


    return (
    <section
        className = {`${ isDark 
            ? "text-dark" 
            : "flex items-center w-fit h-34 gap-8 justify-end justify-self-end"}
        `}
    >
        { role === "admin" &&
            <NavLink 
                to={`/dashboard/admin/${auth}`}
                className = {({isActive}) => `${ isDark 
                ? "text-dark" 
                : "hidden md:flex items-center round-8 py-6 px-12"}
                ${isActive ? "bg-primary8 text-primary" : "text-font-fivethy"}
                f-14 hover:text-primary
            `}>
                <FiShield/>
                <span className = {`${ isDark 
                    ? "text-dark" 
                    : "flex items-center gap-6 round-8 py-6 px-12"}
                `}
                >Admin</span>
            </NavLink> 
        }

        { role === "organizer" &&
            <NavLink 
                to={`/dashboard/organizer/${auth}`}
                className = {`${ isDark 
                ? "text-dark" 
                : "hidden md:flex items-center round-8 py-6 px-12 bg-primary8"}
                text-primary f-14 
            `}>
                <RxDashboard/>
                <span className = {`${ isDark 
                    ? "text-dark" 
                    : "flex items-center gap-6 round-8 py-6 px-12"}
                `}
                >Dashboard</span>
            </NavLink> 
        }

        { isActive ?
            <NavLink 
                to={`/notifications/${auth}`} 
                className={({isActive}) =>`${isActive ? "bg-orange-600/8 text-orange-600" : "text-gray-700 "} 
                relative h-34 w-34 flex items-center justify-center round-8
            `}>
                <FiBell
                    size={24}
                    className = {`${ isDark
                    ? "text-dark"
                    : "text-lg"}
                `}/>

                {/* badge notificasions */}
                {true &&<span className="absolute bottom-18 left-18 w-16 h-16 flex items-center justify-center rounded-full text-white bg-orange-600 font-bold f-9">2</span>}
            </NavLink> 
            :
            <span className = {`${ isDark 
                    ? "text-dark" 
                    : "hidden md:flex text-xs text-font-secondary"}
            `}
            >Browsing as guest</span>
        }

        <div
            onClick={()=> {
                dispatch(tglDark())
            }} 
            className = {`${ isDark 
            ? "bg-orange-600/8 text-orange-600" 
            : "text-gray-700 "}
            cursor-pointer
            w-34 h-34 round-8 flex items-center justify-center
        `}>
            { isDark 
                ? <LuSun 
                    size={24}
                    className = {`${ isDark 
                    ? ""
                    : "text-gray-700 text-lg"}
                    hover:text-primary
                `}/>

                : <FiMoon 
                    size={24}
                    className = {`${ isDark 
                    ? ""
                    : "text-gray-700 text-lg"}
                    hover:text-primary
                `}/>}
        </div>

        { isActive ?
            <>
            <div className = {`${isDark
                ? ""
                : "hidden md:flex items-center justify-center border border-font-primary w-34 h-34 rounded-full overflow-hidden cursor-pointer"}
            `}
                onClick={()=> {
                    setShowNav(!showNav)
                }}
            >
                <img className="object-cover" src="/Dina Rahayu.svg" alt="L" />
            </div>

            <div className = {`${isDark
                ? ""
                : "cursor-pointer"}
            `}
                onClick={()=> {
                    setShowNav(!showNav)
                }}
            >
                {showNav 
                    ? <GoX className={` ${ isDark
                        ? ""
                        : "flex md:hidden text-gray-700 text-lg"}
                    `}/>
                    : <LuAlignJustify className={` ${isDark 
                        ? "" 
                        : "flex md:hidden text-gray-700 text-lg"}
                    `}/>
                }
            </div>
            </> : <>
            <button className = {` ${isDark 
                ? "" 
                : "hidden md:flex f-14 font-semibold px-16 py-6 bg-primary rounded-lg cursor-pointer"}
            `}
                onClick={()=> {
                    navigate("/auth/signin")
                }}
            >Sign In</button>

            <div className={` ${isDark 
                ? "" 
                : ""}
                cursor-pointer
            `}
                onClick={()=> {
                    setShowNav(!showNav)
                }}
            >
                { showNav
                    ? <GoX className={` ${ isDark
                        ? ""
                        : "flex md:hidden text-gray-700 text-lg"}
                    `}/>
                    : <LuAlignJustify className={` ${isDark 
                        ? "" 
                        : "flex md:hidden text-gray-700 text-lg"}
                    `}/>
                }
            </div>
            </>
        }
    </section>
    )
}

export default CreateProfile