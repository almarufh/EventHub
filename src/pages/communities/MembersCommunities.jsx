import { useParams } from 'react-router'
import { getMemberCommunity } from '../../database/data'
import CreateUser from '../../components/dashboard/CreateUser.jsx'

function MembersCommunities() {
  const {id} = useParams()
  const members = getMemberCommunity(id)
  return (
    <section className='mt-10 h-screen w-full max-w-7xl'>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 ">
        <CreateUser data={members} />
      </div>
    </section>
  )
}

export default MembersCommunities