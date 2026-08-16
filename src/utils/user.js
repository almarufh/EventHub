import { load, save } from "./helper/storage.js";

function userLogin(user) {
    user = {
        id: user.id,
        role: user.role,
        isActive: true
    }
    save("actived", user)
    return {
        status: true,
        message: `${user.email} success login!`
    }
}

function userRegister(user) {
    const {status, users, message} = checkEmailUser(user.email)
    
    user = {
        id: `${Date.now()}`,
        email: user.email.toLowerCase(),
        name: user.name,
        password: atob(user.password),
        role: "attendee"
    }

    if (status) {
        return {
            status: false,
            message: message
        }
    }

    const admin = JSON.parse(import.meta.env.VITE_ADMIN)
    admin.forEach(a => {
        if(a === user.email) {
            user.role = "admin"
        }
    });

    const organizer = JSON.parse(import.meta.env.VITE_ORGANIZER)

    organizer.forEach(a => {
        if(a === user.email) {
            user.role = "organizer"
        }
    });

    if(users) {
        users.push(user)
    }
    save("users", users)
    return {
        status: true,
        message: `${user.email} success SignUp!`
    }
}

function checkEmailUser(email) {
    const users = load('users')
    if (!users) {
        return {
            status: false,
            message: `${email} dosn't exist !`,
            users: [],
        }

    }

    const user = users.find((data)=> data.email === email.toLowerCase())
    if (user !== undefined) {
        return {
            status: true,
            message: `${email} allredy exist !`,
            users: users,
            user: user
        }
    } else {
        return {
            status: false,
            message: `${email} dosn't exist !`,
            users: users,
        }
    }
}

export {
    userLogin,
    userRegister,
    checkEmailUser
}