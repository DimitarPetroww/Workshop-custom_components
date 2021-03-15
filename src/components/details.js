import { html, render } from 'https://unpkg.com/lit-html?module';
import { getOne } from "../api/data.js"
const template = (data) => html`
<navigation-component></navigation-component>
<section id="movie-example">
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: ${data.title}</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src="${data.img}"
                    alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>${data.description}</p>
                <a class="btn btn-danger" href="#">Delete</a>
                <a class="btn btn-warning" href="#">Edit</a>
                <a class="btn btn-primary" href="#">Like</a>
                <span class="enrolled-span">Liked 1</span>
            </div>
        </div>
    </div>
</section>`
class Details extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    async render() {
        render(template(await this.getMovie()), this)
    }
    async getMovie() {
        return await getOne(this.location.params.id)
    }
}

export default Details