import { useEventHub } from '../../../hooks/useEventHub.jsx'
import { LuCalendar, LuShield } from 'react-icons/lu'
import { GoPeople } from 'react-icons/go'
import { NavLink, Outlet, useParams } from 'react-router'

function AdminDashboar() {
    const {isDark} = useEventHub()
    const {id} = useParams()

    const tab = [
        {
          name: "Overview",
          link: `/dashboard/admin/${id}/overview`,
          icons: LuShield
        },
        {
          name: "Users",
          link: `/dashboard/admin/${id}/users`,
          icons: GoPeople
        },
        {
            name: "Events",
            link: `/dashboard/admin/${id}/events`,
            icons: LuCalendar
        },
        {
          name: "Communities",
          link: `/dashboard/admin/${id}/communities`,
          icons: GoPeople
        }
    ]

    return (
        <main className={` ${isDark 
            ? "bg-dark" 
            : ""}
            flex flex-col w-full h-screen px-16 md:px-24
        `}>
            <section className={` ${isDark 
                ? "" 
                : ""}
                mt-32 max-w-7xl mx-auto flex items-center justify-between w-full
            `}
            >
                <div className="flex items-center gap-12">
                    <div className="bg-primary/10 w-36 h-36 flex items-center justify-center rounded-xl text-primary">
                        <LuShield/>
                    </div>

                    <div className="flex flex-col">
                        <span className={` ${isDark
                            ? ""
                            : "text-dark-primary"}
                            text-2xl font-bold
                        `}>Admin Dashboard
                        </span>
                        <span className={` ${isDark
                            ? ""
                            : "text-dark-primary"}
                            f-14 text-font-forthy
                        `}
                        >Platform management and moderation.
                        </span>
                    </div>
                </div>

            </section >

            <section className={` ${isDark 
                ? "" 
                : ""}
                mt-32 max-w-7xl mx-auto grid grid-cols-4 items-center justify-between w-full border-b gap-8 border-border-header
            `}>
                {tab.map((tab, i)=> {
                    const Icons = tab.icons
                    return (
                        <NavLink
                            key={i}
                            to={`${tab.link}`}
                            className={({isActive}) => `${isActive
                            ? "border-b text-primary bg-primary/10 rounded-[12px_12px_0px_0px]" 
                            : "text-font-forthy hover:bg-primary/10"}
                            flex flex-col md:flex-row items-center gap-4 md:gap-8 py-10 px-16 f-14 md:w-full justify-center
                        `}>
                            <Icons/>
                            <span>{tab.name}</span>
                        </NavLink>
                    )
                })}
            </section>
            <section className={` ${isDark 
                ? "" 
                : ""}
                max-w-7xl mx-auto flex w-full
            `}>
                <Outlet/>
            </section>
        </main>
    )
}

export default AdminDashboar