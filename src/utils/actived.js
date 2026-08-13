import { load, remove, save } from "./storage.js";

function actived () {
    // const data = {
    //     id: "BC-1786577627428",
    //     role: import.meta.env.VITE_ROLE,
    //     isActive: true
    // }

    // save("actived", data)
    // remove("actived")

    const userActived = load("actived")
    if (!userActived) {
        return {
            status: false,
            message: "User actived not found"
        }
    }


    return {
        status: true,
        message: "User actived found",
        data: userActived
    }
    
}

export default actived