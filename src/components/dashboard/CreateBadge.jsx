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
        },
        {
            status: "technology",
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            status: "artificial intelligence",
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        },
        {
            status: "backend engineering",
            color: "text-indigo-500",
            bg: "bg-indigo-500/10"
        },
        {
            status: "frontend development",
            color: "text-sky-500",
            bg: "bg-sky-500/10"
        },
        {
            status: "mobile development",
            color: "text-teal-500",
            bg: "bg-teal-500/10"
        },
        {
            status: "cloud & devops",
            color: "text-cyan-500",
            bg: "bg-cyan-500/10"
        },
        {
            status: "cybersecurity",
            color: "text-rose-500",
            bg: "bg-rose-500/10"
        },
        {
            status: "data science",
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
        },
        {
            status: "ui/ux design",
            color: "text-pink-500",
            bg: "bg-pink-500/10"
        },
        {
            status: "blockchain & web3",
            color: "text-amber-500",
            bg: "bg-amber-500/10"
        },
        {
            status: "product management",
            color: "text-violet-500",
            bg: "bg-violet-500/10"
        },
        {
            status: "database systems",
            color: "text-blue-600",
            bg: "bg-blue-600/10"
        },
        {
            status: "quality assurance",
            color: "text-lime-600",
            bg: "bg-lime-600/10"
        },
        {
            status: "open source",
            color: "text-green-600",
            bg: "bg-green-600/10"
        },
        {
            status: "tech career & leadership",
            color: "text-yellow-600",
            bg: "bg-yellow-600/10"
        }
    ];
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