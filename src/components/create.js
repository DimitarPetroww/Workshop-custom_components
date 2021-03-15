import { Router } from 'https://unpkg.com/@vaadin/router'
import { html, render } from 'https://unpkg.com/lit-html?module';
import { post } from "../api/data.js"

const template = () => html`
<navigation-component></navigation-component>
<section id="add-movie">
    <form class="text-center border border-light p-5" action="#" method="" @submit="${onFormSubmit}">
        <h1>Add Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input type="text" class="form-control" placeholder="Title" name="title" value="">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Description" name="description"></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input type="text" class="form-control" placeholder="Image Url" name="img" value="">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>
`
async function onFormSubmit(e) {
    e.preventDefault()
    const data = [...new FormData(e.target)].reduce((a, [c, x]) => Object.assign(a, { [c]: x }), {})

    if (Object.values(data).some(x => x === "")) {
        return alert("All fields must be filled!")
    }
    await post(data)
    Router.go("/")
}
class Create extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        render(template(), this)
    }
}

export default Create