function CreateBadge({status}) {
    const create = [
        {
            status: "Active",
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
        },
        {
            status: "registered",
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
        },
        {
            status: "almost-full",
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
        },
        {
            status: "active",
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
        },
        {
            status: "suspended",
            color: "text-red-600",
            bg: "bg-red-100"
        },
        {
            status: "full",
            color: "text-red-600",
            bg: "bg-red-100"
        },
        {
            status: "attendee",
            color: "text-zinc-600",
            bg: "bg-zinc-100"
        },
        {
            status: "organizer",
            color: "text-orange-600",
            bg: "bg-orange-600/10"
        }
    ]
    return (
        <>
        {create.map((e, idx)=> {
            if(e.status === status) {
                return (
                    <div 
                        key={idx}
                        className={`flex items-center justify-center
                    `}>
                      <span className={`${e.color} ${e.bg}
                      py-2 px-8 text-xs font-medium rounded-full h-fit w-fit
                    `}>{status}</span>
                    </div>
                )
            }
        })}
        </>
    )
}

export default CreateBadge