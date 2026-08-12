import { load } from "./storage.js";

function actived () {
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