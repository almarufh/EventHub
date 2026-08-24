import { useEventHub } from '../../hooks/useEventHub'
import { LuCalendar } from 'react-icons/lu'
import { GoPeople, GoPlus } from 'react-icons/go'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { FaRegEye } from 'react-icons/fa'
import { FiEdit3 } from 'react-icons/fi'
import EventChart from '../../components/Chart.jsx'
import { IoBarChartOutline } from 'react-icons/io5'

function AdminDashboar() {
    const {isDark} = useEventHub()

    const total = [
        {
            tittle: "TOTAL EVENTS",
            value: `${2}`,
            sub: `${"Accros all events"}`,
            icons: LuCalendar

        },
        {
            tittle: "TOTAL ATTENDEES",
            value: `${103}`,
            sub: `${"Capacity utilization"}`,
            icons: GoPeople

        },
        {
            tittle: "AVG FILL RATE",
            value: `${"57%"}`,
            sub: `${"Accros all events"}`,
            icons: FaArrowTrendUp

        },
        {
            tittle: "EVENT VIEWS",
            value: `${3241}`,
            sub: `${"Last 30 days"}`,
            icons: FaRegEye

        }
    ]

    return (
        <main className={` ${isDark 
            ? "bg-dark" 
            : ""}
            flex flex-col w-full h-screen mt-55 px-24
        `}>
            <section className={` ${isDark 
                ? "" 
                : ""}
                mt-32 max-w-7xl mx-auto flex items-center justify-between w-full
            `}
            >
                <div className="flex flex-col">
                    <span className={` ${isDark
                        ? ""
                        : "text-dark-primary"}
                        text-2xl font-bold
                    `}>Organizer Dashboard
                    </span>
                    <span className={` ${isDark
                        ? ""
                        : "text-dark-primary"}
                        f-14 text-font-forthy
                    `}
                    >Manage your events and track performance.
                    </span>
                </div>

                <div className="flex items-center justify-center gap-8 bg-primary px-16 py-8 f-14 text-light round-8">
                    <GoPlus/>
                    <span>Create Event</span>
                </div>

            </section >

            <section  className={` ${isDark
                    ? "text-ligth"
                    : "text-dark-primary"}
                    mt-32 max-w-7xl mx-auto w-full grid grid-cols-2 gap-8 
                    md:gap-16 md:grid-cols-4
                `}>
                {total.map((e, key) => {
                    const Icons = e.icons
                    return (
                        <div key={key} className={` ${isDark 
                            ? "" 
                            : ""}
                            border flex flex-col rounded-xl shadow-xl border-border-header p-20
                        `}>
                            <div className={` ${isDark 
                                ? "" 
                                : ""}
                                flex items-center justify-between
                            `}>
                                <span className={` ${isDark 
                                    ? "" 
                                    : ""}
                                    text-xs text-font-forthy
                                `}>{e.tittle}</span>
                                <Icons />
                            </div>
                            <span className={` ${isDark 
                                ? "" 
                                : ""}
                                text-2xl font-bold pt-12
                            `}>{e.value}</span>
                            <span className={` ${isDark 
                                ? "" 
                                : ""}
                                text-xs text-font-forthy
                            `}>{e.sub}</span>
                        </div>
                    )
                }
            )}
            </section>

            <span className={` ${isDark 
              ? "" 
              : "text-dark-primary"}
              text-lg mt-32 max-w-7xl w-full flex mx-auto
            `}>Your Events</span>

            <section className={` ${isDark 
              ? "" 
              : ""}
              max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 w-full mx-auto
            `}>
              <div className={` ${isDark 
                ? "" 
                : ""}
                col-span-1 md:col-span-2 flex gap-12 mt-12 p-16 items-start
                border border-border-header round-8 shadow-xl h-fit
              `}>

                <div className={` ${isDark 
                  ? "" 
                  : ""}
                  flex w-3/10 max-w-80 max-h-64 border border-border-header round-8 overflow-hidden
                `}>
                  <img src={"#"} alt={"#"} className={`w-80 h-64 object-cover`} />
                </div>

                <div className={` ${isDark 
                  ? "" 
                  : ""}
                  w-full
                `}>
                  <div className={` ${isDark 
                    ? "" 
                    : ""}
                    flex items-center justify-between
                  `}>
                    <span className={`${isDark 
                        ? "" 
                        : "text-dark-primary"}
                        f-14 font-semibold
                    `}>Go CO Cuncurrency Workshop</span>

                    <span className={`${isDark 
                        ? "" 
                        : "text-secondary bg-bg-secondary"}
                        text-xs font-medium px-8 py-2 round-8
                    `}>Active</span>

                    </div>

                    <div className="pt-12">
                        <div className='flex justify-between [&_span]:text-xs [&_span]:text-font-forthy mb-6'>
                            <span>48 attendees</span>
                            <span>100 capacity</span>
                        </div>
                        <div className='w-full bg-gray-200 h-6 rounded-full overflow-hidden'>
                            <div
                                className='bg-green-500 h-6 rounded-full'
                                style={{ width: `48%` }}
                            ></div>
                        </div>
                    </div>
                  
                  <div className={` ${isDark 
                    ? "" 
                    : ""}
                    flex place-items-end justify-start gap-8 pt-12
                  `}>
                    <div className="px-12 py-6 f-14 font-medium flex items-center justify-center gap-8 round-8 border border-border-header">
                        <FiEdit3/>
                        <span>Edit</span>
                    </div>
                    <div className="px-12 py-6 f-14 font-medium flex items-center justify-center gap-8 round-8">
                        <FaRegEye />
                        <span>55 attendees</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chart js */}
              <div className={` ${isDark 
                ? "" 
                : ""}
                flex flex-col gap-16 mb-100
              `}>
                <div className={` ${isDark 
                    ? "" 
                    : "bg-light border-border-header"}
                    border shadow-xl rounded-xl p-20
                `}>
                    <div className="flex items-center gap-4">
                      <IoBarChartOutline  size={16} />
                      <h3 className="font-medium f-14 text-dark-primary">Registrations (6 months)</h3>
                    </div>

                    <EventChart/> 
                </div>

                <div className={` ${isDark 
                    ? "" 
                    : "bg-light border-border-header"}
                    border shadow-xl rounded-xl p-20 gap-12 flex flex-col
                `}>
                    <span className="font-semibold f-14 text-dark-primary">Quick Actions</span>

                    <div className="bg-primary gap-8 flex items-center justify-center py-6 round-8 f-14 font-medium">
                        <GoPlus/>
                        <span>Create New Event</span>
                    </div>


                    <div className="bg-thirty gap-8 flex items-center justify-center py-6 round-8 f-14 font-medium">
                        <FaRegEye />
                        <span>Preview as Attendee</span>
                    </div>
                </div>

                <div className={` ${isDark 
                    ? "" 
                    : "bg-light border-border-header"}
                    border shadow-xl rounded-xl p-20 gap-12 flex flex-col
                `}>
                    <span className="font-semibold f-14 text-dark-primary">Upcoming Events</span>

                    <div className="flex items-center gap-12 justify-between">
                        <div className="flex items-center gap-12">
                            <div className="bg-secondary w-6 h-6 rounded-full"></div>
                            <div className="flex-col flex">
                                <span className="text-xs font-medium text-dark-primary">Go Concurrency Workshop</span>
                                <span className="f-11 text-font-secondary">Aug 22, 2026</span>
                            </div>
                        </div>
                        <span className='text-xs text-font-forthy'>48/100</span>
                    </div>

                    <div className="flex items-center gap-12 justify-between">
                        <div className="flex items-center gap-12">
                            <div className="bg-secondary w-6 h-6 rounded-full"></div>
                            <div className="flex-col flex">
                                <span className="text-xs font-medium text-dark-primary">Go Concurrency Workshop</span>
                                <span className="f-11 text-font-secondary">Aug 22, 2026</span>
                            </div>
                        </div>
                        <span className='text-xs text-font-forthy'>48/100</span>
                    </div>
                </div>
              </div>
            </section>
            <section className='fixed md:hidden w-48 h-48 rounded-full bg-primary shadow-xl text-light flex items-center justify-center right-0 bottom-12'>
                <GoPlus size={22}/>
            </section>
        </main>
    )
}

export default AdminDashboar