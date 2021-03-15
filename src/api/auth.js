import { request } from "./api.js"

const URL = "http://localhost:3030"
const endpoints = {
    login: URL + "/" + "users/login",
    register: URL + "/" + "users/register",
    logout: URL + "/" + "users/logout"
}

const login = request.bind(undefined, endpoints.login)
const register = request.bind(undefined, endpoints.register)

function loginUser(userData) {
    return login({
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
}
function regusterUser(userData) {
    return register({
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
}
function logoutUser(token) {
    fetch(endpoints.logout, {
        method: "GET",
        headers: {
            "X-Authorization": token
        }        
    })
    sessionStorage.clear()
}
export { loginUser, regusterUser, logoutUser}