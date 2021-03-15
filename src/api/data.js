import { request } from "./api.js"

const URL = "http://localhost:3030"
const endpoints = {
    all: URL + "/" + "data/movies",
}
const token = sessionStorage.getItem("_token")

const getAll = () => request.bind(undefined, endpoints.all)
const getOne = (id) => request.bind(undefined, endpoints.all + "/" + id)
const post = (body) => request.bind(undefined, endpoints.all, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-Authorization": token
    },
    body: JSON.stringify(body)
})()
const del = (id) => request.bind(undefined, endpoints.all + "/" + id, {
    method: "DELETE",
    headers: {
        "X-Authorization": token
    }
})
export {getAll, getOne, post, del}