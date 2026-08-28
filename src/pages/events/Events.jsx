import { LuSearch } from 'react-icons/lu'
import { TbListTree } from 'react-icons/tb'
import { useState } from 'react'
import CardEvents from '../../components/events/CardEvents.jsx'
import { useEventHub } from '../../hooks/useEventHub.jsx'

function Events() {
  const {filtered} = useEventHub()

  const [btnFilter, setBtnFilter] = useState(false)
  return (
    <main className='flex flex-col items-center pt-64 md:pt-80'>
      <section className='w-full flex justify-center  border-b pb-16 border-border-header'>
        <form className='flex items-center w-9/10 gap-12'>
          <div className="flex w-full items-center py-10 px-12 gap-8 rounded-lg bg-thirty">
            <LuSearch className='text-font-secondary'/>
            <input className='f-14 pl-3 flex flex-wrap w-full outline-none' type="text" placeholder='Search events...' />
          </div>
          <div 
            onClick={(e)=> {
              e.preventDefault()
              setBtnFilter(!btnFilter)
            }}
            className='f-14 md:f-16 border border-border-header font-medium text-light p-6 px-16 py-8 rounded-lg flex items-center gap-6 cursor-pointer'>
            <TbListTree className='text-font-primary'/>
            <span className='text-font-primary f-14 hidden md:flex'>Filters</span>
          </div>
        </form>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-3 w-9/10 gap-20'>
        <div className="col-span-1 md:col-span-3 pt-20">
          <div className="flex items-center gap-5">
            <span className='font-bold f-14 text-dark'>{filtered?.length || 0}</span>
            <span className='f-14 text-dark-primary'>events found</span>
          </div>
        </div>

        {btnFilter && <div className='col-span-1 md:col-span-3'>

          {/* Category */}
          <div>
            <span className="text-xs font-semibold text-font-forthy">CATEGORY</span>
            <div className="flex flex-wrap gap-8 py-4 [&_span]:text-xs [&_span]:px-12 [&_span]:py-6 [&_span]:round-8 [&_span]:border [&_span]:border-border-header">
              <span className="bg-primary text-light">All Categories</span>
              <span className="">Technology</span>
              <span className="">Design</span>
              <span className="">Business</span>
              <span className="">Career</span>
              <span className="">Ai</span>
              <span className="">Programming</span>
              <span className="">Music</span>
            </div>
          </div>

          {/* Location */}
          <div className='pt-10'>
            <span className="text-xs font-semibold text-font-forthy">LOCATION</span>
            <div className="flex flex-wrap gap-8 py-4 [&_span]:text-xs [&_span]:px-12 [&_span]:py-6 [&_span]:round-8 [&_span]:border [&_span]:border-border-header">
              <span className="bg-primary text-light">All Categories</span>
              <span className="">Technology</span>
              <span className="">Design</span>
              <span className="">Business</span>
              <span className="">Career</span>
              <span className="">Ai</span>
              <span className="">Programming</span>
              <span className="">Music</span>
            </div>
          </div>

          {/* Location */}
          <div className='pt-10'>
            <span className="text-xs font-semibold text-font-forthy">SORT BY</span>
            <div className="flex flex-wrap gap-8 py-4 [&_span]:text-xs [&_span]:px-12 [&_span]:py-6 [&_span]:round-8 [&_span]:border [&_span]:border-border-header">
              <span className="bg-primary text-light">All Categories</span>
              <span className="">Technology</span>
              <span className="">Design</span>
              <span className="">Business</span>
              <span className="">Career</span>
              <span className="">Ai</span>
              <span className="">Programming</span>
              <span className="">Music</span>
            </div>
          </div>

        </div>}

        <CardEvents />        

      </section>

      <div className="pt-20 w-full justify-center flex">
        <span className='border border-border-header py-8 px-16 f-14 font-medium text-font-fivethy round-8'>Load more events</span>
      </div>

    </main>
  )
}

export default Events