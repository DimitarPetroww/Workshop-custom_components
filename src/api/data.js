import { request } from "./api.js"

const URL = "http://localhost:3030"
const endpoints = {
    all: URL + "/" + "data/movies",
    likes: URL + "/" + "data/likes"
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
const edit = (id, data) => request.call(undefined, endpoints.all + "/" + id, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        "X-Authorization": sessionStorage.getItem("_token")
    },
    body: JSON.stringify(data)
})
const getLikes = (id) => request.call(undefined, URL + `/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`)
const like = (movieId) => request.call(undefined, endpoints.likes, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-Authorization": sessionStorage.getItem("_token")
    },
    body: JSON.stringify({ movieId })
})
const isLiked = (id) => request.call(undefined, `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${sessionStorage.getItem("_id")}%22`)
export { getAll, getOne, post, del, getLikes, edit, like, isLiked }