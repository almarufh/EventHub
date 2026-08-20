import { Link, Outlet, useParams } from 'react-router'
import { communitieById } from '../../database/data'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import NavCommunities from '../../components/communities/NavCommunities'

function CommunitieDetail() {
  const {id} = useParams()
  const community = communitieById(id)
  return (
    <main className='mt-70 flex items-center flex-col justify-center'>
      <Link to="/communities" className="flex gap-5 items-center py-12 w-9/10">
        <FaArrowLeft className="text-font-forthy" />
        <span className="text-font-forthy f-14">Back to Events</span>
      </Link>
      <section
        className='border relative w-full max-h-200 md:max-h-400 overflow-hidden flex items-center justify-center'
      >
        <img src={community.image} alt={community.name} className="w-full object-contain" />
        <div className="w-9/10 absolute bottom-48 ">
          <span className='text-3xl text-light font-bold w-fit'>{community.name}</span>
          <div className="f-14 z-10 flex gap-24 pl-12">
            <span className='text-[#FFFFFFCC]'>{community.membersCount} members</span>
            <span className='text-[#FFFFFFCC]'>3 upcoming events</span>
          </div>
          <div className="f-14 text-light flex gap-10 items-center py-8 px-16 bg-secondary w-fit rounded-md absolute right-0">
            <FaCheck/>
            <span>Joined</span>
          </div>
        </div>
      </section>

      <section className='w-full max-w-7xl p-16 flex flex-col border border-border-header mt-8 rounded-md'>
        <span className='f-14 text-font-primary'>{community.content}</span>
        <div className='flex gap-8 pt-12'>
          {community.tags.map((e, i)=> 
          <span key={i} className='border border-border-header px-8 py-2 text-xs text-font-sixty round-8'>{e}</span>
          )}
        </div>
      </section>

      <section className='flex max-w-7xl w-full mx-auto border-b border-border-header mt-24'>
        <NavCommunities id={id} />
      </section>

      <Outlet/>
    </main>
  )
}

export default CommunitieDetail