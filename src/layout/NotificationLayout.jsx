import { useEffect } from "react"
import { useEventHub } from "../hooks/useEventHub"

function NotificationLayout() {
    const {dispatch, getAllData, data} = useEventHub()
    
    useEffect(()=> {
        dispatch(getAllData("/data/eventsData.json"))
    }, [dispatch, getAllData])
    
    console.log(data)
    return (
        <main className="h-screen w-full bg-black flex items-center justify-center">
            <span className="font-bold text-2xl text-light">Notifications in maintanance</span>
        </main>
    )
}

export default NotificationLayout