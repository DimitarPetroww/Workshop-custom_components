import { Router } from 'https://unpkg.com/@vaadin/router'
import { html, render } from 'https://unpkg.com/lit-html?module';
import { getOne, getLikes, del } from "../api/data.js"
const template = (data) => html`
<navigation-component></navigation-component>
<section id="movie-example">
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: ${data.title}</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src="${data.img}" alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>${data.description}</p>
                ${data.isAuthor
                ? html`
                <a class="btn btn-danger" href="#" @click="${(event) => deleteMovie(event, data._id)}">Delete</a>
                <a class="btn btn-warning" href="/edit/${data._id}">Edit</a>`
                : html`
                <a class="btn btn-primary" href="#">Like</a>`}
                <span class="enrolled-span">Liked ${data.likes}</span>
            </div>
        </div>
    </div>
</section>`
class Details extends HTMLElement {
    connectedCallback() {
        this.render(this.location.params.id)
    }
    async render(id) {
        render(template(await this.getMovie(id)), this)
    }
    async getMovie(id) {
        const data = await getOne(id)
        const likes = await getLikes(id)
        const isAuthor = sessionStorage.getItem("_id") === data._ownerId
        Object.assign(data, { likes, isAuthor })
        return data
    }
}
async function deleteMovie(e, id) {
    e.preventDefault()
    const confirmed = confirm("Are you sure you want to delete this movie?")
    if(confirmed) {
        await del(id)
        Router.go("/")
    }
}
export default Details