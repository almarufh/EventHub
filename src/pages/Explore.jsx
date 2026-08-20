import React, { useEffect, useState } from 'react'
import star from '../assets/icons/Sparkles.svg'
import { Outlet } from 'react-router'
import { LuSearch } from 'react-icons/lu'
import { FaArrowRight } from 'react-icons/fa'
import { CiBookmark, CiCalendar } from 'react-icons/ci'
import { PiMapPinLight } from 'react-icons/pi'
import { GoPeople } from 'react-icons/go'
import { FaArrowTrendUp } from 'react-icons/fa6'
import CategoryEvents from '../components/events/CategoryEvents'
import { load } from '../utils/helper/storage'

function Explore() {
  const [user, setUser] = useState()

  useEffect(()=> {
    const active = load("actived")
    if(active) {
      setUser(active)
    }
  },[])

  return (
    <main className='flex flex-col w-full items-center'>
      <section className='w-full bg-radial from-orange-900 from-5% to-black justify-center items-center flex pb-64 px-16'>
        <div className="w-9/10 border-none flex flex-col pt-80 md:pt-96 items-center border">

          <div className="pb-24">
            <div className='flex items-center justify-center gap-6 w-fit border border-primary py-4 px-12 rounded-full '>
              <img src={star} alt="star" />
              <span className='text-xs text-primary'>Discover · Connect · Participate</span>
            </div>
          </div>

          <div className="flex font-bold flex-wrap items-center justify-center w-full pb-45">
            <p className="text-light text-3xl md:text-6xl text-center">Find events that <br/> <span className='text-primary'>actually matter</span> to you</p>
          </div>

          <span className="text-font-secondary text-lg text-center">Join workshops, conferences, and meetups in Indonesia's best tech communities — or create your own.</span>

          <div className="w-full px-3 md:px-160 pt-40">
            <div className="bg-light rounded-xl flex items-center w-full">
              <LuSearch className='text-font-secondary ml-16'/>
              <input className='f-14 pl-3 flex flex-wrap w-full outline-none' type="text" placeholder='Search events, topics, or locations...' />
              <span className='f-14 md:f-16 bg-primary font-medium text-light p-6 px-16 py-8 rounded-lg my-3 mr-3'>Search</span>
            </div>
          </div>

          <div className="pt-20">
            <div className="flex flex-wrap gap-8 items-center justify-center [&_span]:text-font-secondary [&_span]:text-xs">
              <span className='px-12 py-4 border border-font-fivethy rounded-lg'>Technology</span>
              <span className='px-12 py-4 border border-font-fivethy rounded-lg'>Ai</span>
              <span className='px-12 py-4 border border-font-fivethy rounded-lg'>Design</span>
              <span className='px-12 py-4 border border-font-fivethy rounded-lg'>Business</span>
              <span className='px-12 py-4 border border-font-fivethy rounded-lg'>Programming</span>
              <span className='px-12 py-4 border border-font-fivethy rounded-lg'>Music</span>
            </div>
          </div>

        </div>
      </section>

      {/* GUEST */}
      
      {/* Discover events that interest you */}
      {true && <section className='grid grid-cols-1 md:grid-cols-3 w-9/10 gap-20'>
        
        <div className="col-span-1 md:col-span-3 pt-40">
          <div className="flex items-center justify-between">
            <span className='font-bold text-md'>Discover events that interest you</span>
            <div className="flex items-center gap-2 md:gap-4">
              <span className='f-14'>See all</span>
              <FaArrowRight className='text-xs'/>
            </div>
          </div>
        </div>

        <CategoryEvents category={"recommended_events"} limit={3} />

      </section>} 

      {/* ATTENDY */}      
      {/* Because you joined Bandung Go Community */}

      {true && <section className='grid grid-cols-1 md:grid-cols-3 w-9/10 gap-20'>
        
        <div className="col-span-1 md:col-span-3 pt-40">
          <div className="flex gap-4 md:gap-8 items-center">
            <FaArrowTrendUp className='text-primary text-xs'/>
            <span className="text-xs text-primary">Recommended for you</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className='font-bold text-md w-auto'>Because you joined <span className="text-primary">Bandung Go Community</span></p>
            <div className="flex items-center gap-2 md:gap-4 w-fit shrink-0 whitespace-nowrap">
              <span className='f-14'>See all</span>
              <FaArrowRight className='text-xs'/>
            </div>
          </div>
        </div>

        <CategoryEvents category={"recommended_events"} limit={3} />

      </section>}      


      {/* All Upcoming Events */}

      {true && <section className='grid grid-cols-1 md:grid-cols-3 w-9/10 gap-20'>
        
        <div className="col-span-1 md:col-span-3 pt-40">
          <div className="flex items-center justify-between gap-2">
            <p className='font-bold text-md w-auto'>All Upcoming Events</p>
            <div className="flex items-center gap-2 md:gap-4 w-fit shrink-0 whitespace-nowrap">
              <span className='f-14'>See all</span>
              <FaArrowRight className='text-xs'/>
            </div>
          </div>
        </div>

        <CategoryEvents category={"upcoming_events"} limit={3} />

      </section>}

      {/* Popular Communities */}

      <section className='grid grid-cols-1 md:grid-cols-3 w-9/10 gap-20'>
        
        <div className="col-span-1 md:col-span-3 pt-40">
          <div className="flex items-center justify-between">
            <span className='font-bold text-md'>Popular Communities</span>
            <div className="flex items-center gap-2 md:gap-4">
              <span className='f-14'>See all</span>
              <FaArrowRight className='text-xs'/>
            </div>
          </div>
        </div>

        <article className='flex gap-12 flex-col border border-border-header round-8 overflow-hidden'>
          <div className="">
            <img className='w-full object-cover' src="/Image (Go Concurrency Workshop).svg" alt="Go Concurrency Workshop" />
          </div>
          <div className="flex flex-col gap-12 p-16">
            <span className="">Bandung Go Community</span>

            <span className='text-xs text-font-forthy'>The premier Go programming community in Bandung — weekly meetups, workshops, and mentoring for Gophers at all levels.</span>

            <div className="flex gap-6">
              <span className='text-font-sixty text-xs py-2 px-8 round-8 bg-biru10'>Technology</span>
              <span className="text-secondary text-xs py-2 px-8 round-8 bg-hijau10">Programming</span>
            </div>

            <div className='flex justify-between [&_span]:text-xs [&_span]:text-font-forthy'>
              <div className="flex gap-4">
                <GoPeople />
                <span>847 members</span>
              </div>
              <div className="flex gap-4">
                <CiCalendar/>
                <span>3 upcoming</span>
              </div>
            </div>

            <div className="flex gap-8 pt-6 items-center">
              <span className='bg-primary py-6 px-12 f-14 text-light w-full text-center font-medium round-8'>Join Community</span>
            </div>

          </div>
        </article>

      </section>

      {/* What the community says */}
      <section className='grid grid-cols-1 md:grid-cols-3 w-9/10 gap-20 '>
        
        <div className="col-span-1 md:col-span-3 pt-40">
          <div className="flex items-center justify-between">
            <span className='font-bold text-md'>What the community says</span>
          </div>
        </div>

        <article className='flex gap-12 flex-col border border-border-header round-8 overflow-hidden'>
          <div className="flex flex-col gap-16 p-20">
            <span className="text-2xl text-primary">''</span>
            <span className='f-14 text-font-primary'>EventHub completely changed how I network. I met my current co-founder at a Jakarta AI meetup I found here. The community pages make it so easy to find people who are into the same things.</span>
            <div className="flex items-center gap-12">

              <div className="bg-font-sixty w-36 h-36 flex justify-center items-center rounded-full">
                <span className='text-light text-xs font-bold'>{"rn".toLocaleUpperCase()}</span>
              </div>

              <div className='flex flex-col'>
                <span className="f-14 text-dark-primary">Raisa Nurdiana</span>
                <span className="text-xs text-font-forthy">Frontend Engineer · Cakrawala Digital</span>
              </div>

            </div>
          </div>


        </article>

      </section>

      <section className='flex items-center justify-center w-full pt-56'>
        <article className='w-9/10 bg-dark p-32 rounded-2xl flex flex-col items-center'>
          <div className='flex gap-8 justify-center items-center'>
            <span className='text-font-sixty text-xs py-2 px-8 round-8 bg-biru10'>Technology</span>
            <span className='text-font-sixty text-xs py-2 px-8 round-8 bg-biru10'>Ai</span>
            <span className='text-ungu text-xs py-2 px-8 round-8 bg-ungu-second'>Design</span>
          </div>

          <span className='text-2xl text-light text-center font-bold pt-16'>Ready to find your community?</span>

          <span className="pt-12 f-14 text-font-secondary text-center">Join thousands of developers, designers, and makers in Indonesia's most active tech communities.</span>

          <div className="flex flex-col md:flex-row gap-8 pt-12 items-center">
            <span className='bg-primary f-16 text-light py-12 px-24 round-8 font-medium'>Explore Events</span>

            <span className="font-medium f-16 text-font-fivethy py-12 px-24 border border-font-fivethy round-8">Browse Communities</span>
          </div>

        </article>
      </section>

    </main>
  )
}

export default Explore