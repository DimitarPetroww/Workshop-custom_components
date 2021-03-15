import { html, render } from 'https://unpkg.com/lit-html?module';
import { getAll } from "../api/data.js"
const template = (data) => html`
<h1 class="text-center">Movies</h1>
<a href="/create" class="btn btn-warning ">Add Movie</a>
<div class=" mt-3 ">
    <div class="row d-flex d-wrap">
        <div class="card-deck d-flex justify-content-center">${data.map(movieTemplate)}</div>
    </div>
</div>
`
const movieTemplate = (data) => html`
<div class="card mb-4">
    <img class="card-img-top" src="${data.img}" alt="Card image cap"
        width="400">
    <div class="card-body">
        <h4 class="card-title">${data.title}</h4>
    </div>
    <div class="card-footer">
        <a href="/details/${data._id}">
            <button type="button" class="btn btn-info">Details</button>
        </a>
    </div>
</div>`
class Movies extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    async render() {
        render(template(await this.getMovies()), this)
    }
    async getMovies() {
        return await getAll()
    }
}

export default Movies