import { request } from "./api.js"

const URL = "http://localhost:3030"
const endpoints = {
    all: URL + "/" + "data/movies",
}
const getAll = () => request.call(undefined, endpoints.all)
const getOne = (id) => request.call(undefined, endpoints.all + "/" + id)
const post = (body) => request.call(undefined, endpoints.all, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-Authorization": sessionStorage.getItem("_token")
    },
    body: JSON.stringify(body)
})
const del = (id) => request.call(undefined, endpoints.all + "/" + id, {
    method: "DELETE",
    headers: {
        "X-Authorization": sessionStorage.getItem("_token")
    }
})
export {getAll, getOne, post, del}