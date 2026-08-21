import { NavLink, Outlet, useParams } from "react-router"

function MyEvents() {
  const {id} = useParams()
  const tab = [
    {
      name: "Upcoming",
      link: `/myevents/${id}/upcoming`
    },
    {
      name: "Past",
      link: `/myevents/${id}/past`
    },
    {
      name: "Saved",
      link: `/myevents/${id}/saved`
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
      <section className="mt-10">
        <Outlet/>
      </section>
    </main>

  )
}

export default MyEvents