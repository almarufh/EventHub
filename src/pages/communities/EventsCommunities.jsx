import { useParams } from "react-router"
import CardEvents from "../../components/events/CardEvents.jsx"

function EventsCommunities() {
  const {id} = useParams()
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mt-10">
      <CardEvents community={id} />
    </section>
  )
}

export default EventsCommunities