import { LuArrowLeft } from "react-icons/lu"
import { Outlet } from "react-router"

function CreateEvents() {
  return (
    <>
    <main className="w-full mt-8 border-b border-zinc-200 flex items-center">
        <section className="w-full max-w-7xl flex items-center mx-auto px-16 justify-between">
            <div className="flex items-center gap-16">
                <div className="flex items-center gap-6 f-14 text-zinc-500 py-12">
                    <LuArrowLeft/>
                    <span>Back</span>
                </div>
                <span className="f-16 font-semibold text-zinc-900">Create Event</span>
            </div>
            <div className="flex gap-8 py-8 items-center">
                <div className={`${true ? "bg-orange-600" : "bg-zinc-200"} w-24 h-24 rounded-full flex items-center justify-center text-xs font-semibold text-white`}>
                    <span>1</span>
                </div>

                <div className="w-32 border border-zinc-200"/>

                <div className={`${false ? "bg-orange-600" : "bg-zinc-200"} w-24 h-24 rounded-full flex items-center justify-center text-xs font-semibold text-white`}>
                    <span>2</span>
                </div>

                <div className="w-32 border border-zinc-200"/>

                <div className={`${false ? "bg-orange-600" : "bg-zinc-200"} w-24 h-24 rounded-full flex items-center justify-center text-xs font-semibold text-white`}>
                    <span>3</span>
                </div>
            </div>
        </section>
    </main>
    <Outlet/>
    </>
  )
}

export default CreateEvents