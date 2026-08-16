import { LuSearch } from 'react-icons/lu'
import { TbListTree } from 'react-icons/tb'
import { CiBookmark, CiCalendar } from 'react-icons/ci'
import { PiMapPinLight } from 'react-icons/pi'
import { GoPeople } from 'react-icons/go'

function Events() {
  return (
    <main className='flex flex-col items-center pt-64 md:pt-80'>
      <section className='w-full flex justify-center  border-b pb-16 border-border-header'>
        <form className='flex items-center w-9/10 gap-12'>
          <div className="flex w-full items-center py-10 px-12 gap-8 rounded-lg bg-thirty">
            <LuSearch className='text-font-secondary'/>
            <input className='f-14 pl-3 flex flex-wrap w-full outline-none' type="text" placeholder='Search events...' />
          </div>
          <div className='f-14 md:f-16 border border-border-header font-medium text-light p-6 px-16 py-8 rounded-lg flex items-center gap-6'>
            <TbListTree className='text-font-primary'/>
            <span className='text-font-primary f-14 hidden md:flex'>Filters</span>
          </div>
        </form>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-3 w-9/10 gap-20'>
        <div className="col-span-1 md:col-span-3 pt-20">
          <div className="flex items-center gap-5">
            <span className='font-bold f-14 text-dark'>10</span>
            <span className='f-14 text-dark-primary'>events found</span>
          </div>
        </div>

        <div className='col-span-1 md:col-span-3'>

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

        </div>

        <article className='flex gap-12 flex-col border border-border-header round-8 overflow-hidden'>
          <div className="">
            <img className='w-full object-cover' src="/Image (Go Concurrency Workshop).svg" alt="Go Concurrency Workshop" />
          </div>
          <div className="flex flex-col gap-12 p-16">
            <span className="">Go Concurrency Workshop</span>

            <div className="">
              <div className="flex items-center gap-6">
                <CiCalendar/>
                <span className='text-xs text-font-forthy'>Sep 5, 2026 · 08:30 WIB</span>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <PiMapPinLight />
                <span className='text-xs text-font-forthy'>Jakarta</span>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <GoPeople />
                <span className='text-xs text-font-forthy'>J234 / 300 attendees</span>
              </div>

            </div>

            <div className="">
              <div className='flex justify-between [&_span]:text-xs [&_span]:text-font-forthy'>
                <span>48 attendees</span>
                <span>100 capacity</span>
              </div>
              <div className='w-full border-2 border-secondary mt-6'></div>
            </div>

            <div className="flex gap-8 pt-6 items-center">
              <span className='bg-primary py-6 px-12 f-14 text-light w-full text-center font-medium round-8'>Join Event</span>
              <div className='p-8 border-border-header border round-8'>
                <CiBookmark className='text-font-secondary'/>
              </div>
            </div>

          </div>
        </article>

      </section>

      <div className="pt-20 w-full justify-center flex">
        <span className='border border-border-header py-8 px-16 f-14 font-medium text-font-fivethy round-8'>Load more events</span>
      </div>

    </main>
  )
}

export default Events