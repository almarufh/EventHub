import { NavLink, Outlet, useParams } from "react-router"
import { LuMapPin } from "react-icons/lu"
import { CiCalendar } from "react-icons/ci"
import { FiEdit2 } from "react-icons/fi"
import { useEffect, useState } from "react"
import { IoClose } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { checkEmail } from "../../redux/slice/user"

function MyProfile() {
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(checkEmail(id))
  },[dispatch,id])
  
  const {userExist} = useSelector(state => state.eventHub)
  const {data: user} = userExist
  const [modal, setModal] = useState(false)
  const tab = [
      {
          name: "Events", 
          link: `/myprofile/${id}/events`
      },
      {
          name: "Communities", 
          link: `/myprofile/${id}/communities`
      },
      {
          name: "Saved",
          link: `/myprofile/${id}/saved`
      }
  ]
  return (
    <main className="mt-75 px-16">
      {modal && 
        <section 
          // onClick={(e)=> {
          //   e.preventDefault()
          //   e.stopPropagation()
          //   setModal(!modal)
          // }}
          className="fixed w-full h-screen bg-black/10 inset-0 z-50 flex items-center justify-center">
          <div className="bg-light text-dark-primary max-w-md min-w-sm rounded-2xl border-border-header relative">
            <IoClose  
              onClick={(e)=> {
                e.preventDefault()
                setModal(!modal)
              }}
              className="absolute right-10 top-10 hover:border hover:rounded-full hover:text-font-error cursor-pointer"
            />
            <span
              className="border-b border-border-header f-16 font-semibold text-dark-primary flex w-full p-24"
            >Edit Profile</span>
            
            <form
              className="px-24">
                <div className="flex justify-center mt-12">
                  <label htmlFor="image" className="cursor-pointer">
                    <div className="w-100 h-100 rounded-full border border-border-header">
                      {/* <img src="#" alt="#" className="#" /> */}
                    </div>
                    <input type="file" id="image" className="hidden" />
                  </label>
                </div>

                <div className="flex flex-col gap-6 pt-16">

                  <label htmlFor="name" className="font-medium f-14 text-font-fivethy">Full Name</label>
                  <input 
                    type="text"
                    id="name"
                    // defaultValue={user.name}
                    className="px-12 py-10 text-xs border border-border-header rounded-md"
                  />
                </div>  
                <div className="flex flex-col gap-6 pt-16">
                  <label htmlFor="location" className="font-medium f-14 text-font-fivethy">Location</label>
                  <input 
                    type="text"
                    id="location"
                    // defaultValue={user.name}
                    className="px-12 py-10 text-xs border border-border-header rounded-md"
                  />
                </div>  
                <div className="flex flex-col gap-6 pt-16">
                  <label htmlFor="location" className="font-medium f-14 text-font-fivethy">Bio</label>
                  <textarea 
                    type="text"
                    id="location"
                    placeholder="Tell the community a little about yourself..."
                    // defaultValue={user.name}
                    className="px-12 py-10 text-xs border border-border-header rounded-md min-h-100"
                  />
                </div>

                <div 
                  onClick={(e)=> {
                    e.preventDefault()
                    e.stopPropagation()
                    setModal(!modal)
                  }}
                  className="flex gap-5 my-24 justify-end">
                  <span className="text-dark-primary bg-border-header px-16 py-8 round-8 f-14 cursor-pointer">Cancel</span>
                  <span className="text-light bg-primary px-16 py-8 round-8 f-14 cursor-pointer">Save Changes</span>
                </div>
            </form>
          </div>
        </section>}
      <section className="z-60 flex-col flex max-w-7xl w-full mx-auto">

        <div className="flex gap-20">
          <div className="h-80 w-80 border border-border-header rounded-xl">
            <img src="#" alt="#" className="" />
          </div>

          <div className="flex flex-col justify-between items-start w-full">
            <div className="flex flex-col md:flex-row w-full justify-between">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-dark-primary">{user.name}</span>
                <span className="f-14 text-font-forthy">{user.email}</span>
              </div>

              <div
                onClick={()=> {
                  setModal(!modal)
                }}
                className="w-fit flex gap-8 items-center f-14 text-font-fivethy py-6 px-12 border border-border-header round-8 mt-8 md:mt-0 cursor-pointer hover:text-secondary hover:border-secondary">
                <FiEdit2/>
                <span>Edit Profile</span>
              </div>
            </div>

            <div className="flex gap-12 flex-col">
              {true && 
                <div className="flex flex-col md:flex-row gap-8 text-xs text-font-forthy md:items-center mt-8">
                  <div className="flex gap-12">
                    <div className="flex items-center gap-2">
                      <LuMapPin/>
                      <span>{`${user?.alamat?.kota || "Bogor"}, Indonesia`}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <CiCalendar/>
                      <span>{`Joined March 2025`}</span>
                    </div>
                  </div>

                  <span className="py-2 px-8 round-8 bg-primary8 text-primary w-fit">Attende</span>

                </div>
              }
              {true && <span className="text-font-primary f-14 max-w-2xl">Backend engineer & community builder. Passionate about Go, distributed systems, and connecting people through events.</span>}
            </div>

          </div>
        </div>

        <div className="pt-16">
          {tab.map((e, id)=> 
              <NavLink key={id} to={e.link} className={({isActive})=> `${isActive ? "text-primary border-b border-primary" : "text-font-forthy"} py-10 px-16 f-14 font-medium`}>{e.name}</NavLink>
          )}
        </div>
      </section>
      <section className="mx-auto mt-20 max-w-7xl">
        <Outlet/>
      </section>
    </main>
  )
}

export default MyProfile