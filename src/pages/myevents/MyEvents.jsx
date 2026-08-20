import { NavLink } from "react-router"

function MyEvents() {
  const tab = [
    {
      name: "Upcoming",
      link: "/myevents/upcoming"
    },
    {
      name: "Members",
      link: "/myevents/past"
    },
    {
      name: "Discussion",
      link: "/myevents/saved"
    }
]
  return (
    <main className="mt-75 px-16">
      <section className="max-w-7xl w-full mx-auto">
        <span className="text-2xl font-bold">My Events</span>
        <div className="pt-16">
          {tab.map((e, id)=> 
              <NavLink key={id} to={e.link} className={({isActive})=> `${isActive ? "text-primary border-b border-primary" : "text-font-forthy"} py-10 px-16 f-14 font-medium`}>{e.name}</NavLink>
          )}
        </div>
      </section>
    </main>
  )
}

export default MyEvents