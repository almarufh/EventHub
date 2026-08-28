import SummaryDashboard from "../../../components/dashboard/SummaryDashboard"
import { useEventHub } from '../../../hooks/useEventHub.jsx'
import { LuCalendar, LuFlag} from 'react-icons/lu'
import { GoPeople } from 'react-icons/go'
import { color } from "chart.js/helpers"

function OverviewDasboardAdmin() {
    const {isDark} = useEventHub()
    const total = [
        {
            tittle: "TOTAL USERS",
            value: `${2}`,
            sub: `${"Accros all events"}`,
            icons: GoPeople

        },
        {
            tittle: "TOTAL EVENTS",
            value: `${103}`,
            sub: `${"Capacity utilization"}`,
            icons: LuCalendar

        },
        {
            tittle: "COMMUNITIES",
            value: `${"57%"}`,
            sub: `${"Accros all events"}`,
            icons: GoPeople

        },
        {
            tittle: "AVG FILL RATE",
            value: `${"74%"}`,
            sub: `${"Across all events"}`,
            icons: LuFlag

        }
    ]

    const recent = [
      {
        message: "284 new users registered this month",
        update: "today",
        color: "text-secondary",
        icons: GoPeople
      },
      {
        message: `"AI Product Design Summit" reached 234 registrations`,
        update: "2h ago",
        color: "text-font-sixty",
        icons: LuCalendar
      },
      {
        message: "3 new organizer applications received",
        update: "5h ago",
        color: "text-primary",
        icons: LuFlag
      },
      {
        message: "Jakarta AI & ML Club crossed 2,000 members",
        update: "1d ago",
        color: "text-secondary",
        icons: GoPeople
      }
    ]
  return (
    <main className={`
      w-full mt-16 flex flex-col gap-24
    `}
    >
      <SummaryDashboard isDark={isDark} total={total}/>
      <section className={`
        p-20 bg-white border border-border-header rounded-xl flex flex-col gap-12
      `}
      >
        <span className={`f-14 font-semibold text-dark-primary `}>Recent Platform Activity</span>
        {recent.map((rec, idx)=> {
          const Icons = rec.icons
          return (
          <div 
            key={idx} 
            className={`
              flex justify-between items-center f-14 text-font-primary
            `}>
            <div className="flex items-center gap-12">
              <Icons className={rec.color}/>
              <span>{rec.message}</span>
            </div>
            <span className="text-xs text-font-secondary">{rec.update}</span>
          </div>
          )
        })}
      </section>
    </main>
  )
}

export default OverviewDasboardAdmin