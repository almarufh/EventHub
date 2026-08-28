import { LuArrowRight } from 'react-icons/lu'

function Create2() {
  return (
    <main className="w-full max-w-7xl flex mx-auto flex-col mt-32 px-16 gap-24 mb-100">
      <section className='px-16 flex flex-col'>
        <span className="text-xl text-zinc-900 font-bold">Date, Location & Capacity</span>
        <span className='f-14 text-zinc-500'>Tell attendees what your event is about.</span>
      </section>

      <form className="px-16 flex flex-col gap-24">
        <div className="flex flex-col gap-6">
          <label htmlFor="tittle" className='f-14'>Event Date</label>
          <input 
            type="text" 
            id="tittle"
            name="tittle"
            className="mt-6 outline-none border px-12 py-10 round-8 border-zinc-200 f-14" 
          />
        </div>

        <div className="flex w-full gap-16">
          <div className="flex flex-col gap-6 w-full">
            <label htmlFor="tittle">Start Time</label>
            <input 
              type="text" 
              id="tittle"
              name="tittle"
              className="mt-6 outline-none border px-12 py-10 round-8 border-zinc-200 f-14" 
            />
          </div>

          <div className="flex flex-col gap-6 w-full">
            <label htmlFor="tittle">End Time</label>
            <input 
              type="text" 
              id="tittle"
              name="tittle"
              className="mt-6 outline-none border px-12 py-10 round-8 border-zinc-200 f-14" 
            />
          </div>
        </div>


        <div className="flex justify-between items-center">
          <span className="py-8 px-16 f-14 font-medium text-zinc-700 round-8 hover:border hover:border-red-500 hover:text-red-500 hover:font-bold cursor-pointer">Cancel</span>
          <div className="flex items-center f-14 text-white bg-orange-600 w-fit py-8 px-16 round-8 gap-8 hover:font-bold cursor-pointer">
            <span>Continue</span>
            <LuArrowRight/>
          </div>
        </div>
      </form>
    </main>
  )
}

export default Create2