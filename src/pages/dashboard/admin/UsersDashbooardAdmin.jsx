import { useState } from "react"
import { HiDotsHorizontal } from "react-icons/hi"
import { LuSearch } from "react-icons/lu"
import { useSearchParams } from "react-router"
import CreateBadge from "../../../components/dashboard/CreateBadge"
import formatDateObject from "../../../utils/helper/formatDateObject"

function UsersDashbooardAdmin() {
  const [queryParam, setQueryParam] = useSearchParams()
  const [inputSearch, setInputSearch] = useState(null)
  function search (e) {
    const value = e.target.value
    setQueryParam((prevQuery)=> {
      if(value) {
        setInputSearch(value)
        prevQuery.set("user", e.target.value)
      } else {
        setInputSearch(value)
        prevQuery.delete("user")
      }
      return prevQuery
    })
  }

  const users = [
    {
      name: "Alex Kim",
      email: "alex.kim@example.com",
      role: "organizer",
      status: "active",
      joined: 1724000000000,
    },
    {
      name: "Sarah Jenkins",
      email: "sarah.j@example.com",
      role: "attendee",
      status: "active",
      joined: 1724086400000,
    },
    {
      name: "Budi Santoso",
      email: "budi.santoso@example.com",
      role: "organizer",
      status: "active",
      joined: 1724172800000,
    },
    {
      name: "Elena Rostova",
      email: "elena.r@example.com",
      role: "attendee",
      status: "suspended",
      joined: 1724259200000,
    },
    {
      name: "Marcus Vance",
      email: "marcus.v@example.com",
      role: "attendee",
      status: "active",
      joined: 1724345600000,
    },
    {
      name: "Amina Yusuf",
      email: "amina.y@example.com",
      role: "organizer",
      status: "active",
      joined: 1724432000000,
    },
    {
      name: "Carlos Mendez",
      email: "carlos.m@example.com",
      role: "attendee",
      status: "suspended",
      joined: 1724518400000,
    },
    {
      name: "Chloe Dupont",
      email: "chloe.d@example.com",
      role: "attendee",
      status: "active",
      joined: 1724604800000,
    },
    {
      name: "Devon Lane",
      email: "devon.lane@example.com",
      role: "organizer",
      status: "active",
      joined: 1724691200000,
    },
    {
      name: "Siti Rahma",
      email: "siti.rahma@example.com",
      role: "attendee",
      status: "active",
      joined: 1724777600000,
    },
    {
      name: "Liam O'Connor",
      email: "liam.oc@example.com",
      role: "attendee",
      status: "active",
      joined: 1724864000000,
    },
    {
      name: "Maya Patel",
      email: "maya.patel@example.com",
      role: "organizer",
      status: "active",
      joined: 1724950400000,
    },
    {
      name: "Kenji Sato",
      email: "kenji.sato@example.com",
      role: "attendee",
      status: "suspended",
      joined: 1725036800000,
    },
    {
      name: "Olivia Zhang",
      email: "olivia.z@example.com",
      role: "attendee",
      status: "active",
      joined: 1725123200000,
    },
    {
      name: "Hassan Ali",
      email: "hassan.ali@example.com",
      role: "organizer",
      status: "active",
      joined: 1725209600000,
    },
    {
      name: "Nadia Silva",
      email: "nadia.silva@example.com",
      role: "attendee",
      status: "active",
      joined: 1725296000000,
    },
    {
      name: "Thomas Becker",
      email: "thomas.b@example.com",
      role: "attendee",
      status: "suspended",
      joined: 1725382400000,
    },
    {
      name: "Ananya Sharma",
      email: "ananya.s@example.com",
      role: "organizer",
      status: "active",
      joined: 1725468800000,
    },
    {
      name: "Lucas Moreira",
      email: "lucas.m@example.com",
      role: "attendee",
      status: "active",
      joined: 1725555200000,
    },
    {
      name: "Zoe Kravitz",
      email: "zoe.k@example.com",
      role: "attendee",
      status: "active",
      joined: 1725641600000,
    },
  ];

  return (
    <main className={`
      max-w-7xl w-full flex-col gap-16 mt-8
    `}>
      <section>
        <form
        >
          <div className={`
             flex items-center gap-8 text-font-secondary f-14 px-12 border border-border-header round-8
          `}>
            <LuSearch/>
            <input
              placeholder="Search users..." 
              type="text" 
              onChange={search}
              onBlur={()=> {
                if(!inputSearch) {
                  setQueryParam((prevQuery)=> {
                    prevQuery.delete("user")
                  })
                }
              }}
              defaultValue={queryParam}
              className={`
                bg-white py-10 outline-none text-dark
            `}/>
          </div>
        </form>
      </section>

      <table className={`
        table-auto w-full
      `}>
        <thead>
          <tr>
            <th className="">
              <div className="text-start py-13 px-16 text-xs text-font-forthy font-semibold">
                <span>USER</span>
              </div>
            </th>
            <th className="hidden md:table-cell">
              <div className="text-center py-13 px-16 text-xs text-font-forthy font-semibold">
                <span>ROLE</span>
              </div>
            </th>
            <th>
              <div className="text-center py-13 text-xs text-font-forthy font-semibold">
                <span>STATUS</span>
              </div>
            </th>
            <th className="hidden md:table-cell">
              <div className="text-center py-13 px-16 text-xs text-font-forthy font-semibold">
                <span>JOINED</span>
              </div>
            </th>
            <th>
              <div className="text-center py-13 px-16 text-xs text-font-forthy font-semibold">
                <span>ACTION</span>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((e, idx)=> {
            const {month, years} = formatDateObject(e.joined)
            return (
              <tr key={idx}>
                <td>
                  <div className="px-16 py-13 flex flex-col">
                    <span className="f-14 font-medium text-dark-primary">{e.name}</span>
                    <span className="text-xs text-font-secondary">{e.email}</span>
                  </div>
                </td>
                <td className="hidden md:table-cell">
                  <CreateBadge status={e.role}/>
                </td>
                <td>
                  <CreateBadge status={e.status}/>
                </td>
                <td className="hidden md:table-cell">
                  <div className="flex items-center justify-center">
                    <span className="py-2 px-8 rounded-full text-xs text-font-secondary">{`${month} ${years}`}</span>
                  </div>
                </td>
                <td>
                  <div className="text-xl text-font-secondary flex items-center justify-center">
                    <HiDotsHorizontal/>
                  </div>
                </td>
              </tr>
            )})
          }
        </tbody>
      </table>
    </main>
  )
}

export default UsersDashbooardAdmin