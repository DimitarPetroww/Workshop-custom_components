import { Router } from 'https://unpkg.com/@vaadin/router'
import { html, render } from 'https://unpkg.com/lit-html?module';
import { edit } from "../api/data.js"

const template = (id) => html`
<navigation-component></navigation-component>
<section id="edit-movie">
    <form class="text-center border border-light p-5" action="#" method="" @submit="${(event) => onFormSubmit(event, id)}">
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input type="text" class="form-control" placeholder="Movie Title" value="" name="title">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Movie Description..." name="description"></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input type="text" class="form-control" placeholder="Image Url" value="" name="img">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>
`
async function onFormSubmit(e, id) {
    e.preventDefault()
    const data = [...new FormData(e.target)].reduce((a, [c, x]) => Object.assign(a, { [c]: x }), {})
    console.log(id);

    if (Object.values(data).some(x => x === "")) {
        return alert("All fields must be filled!")
    }
    
    await edit(id, data)
    Router.go(`/details/` + id)
}

class Edit extends HTMLElement {
    connectedCallback() {
        this.render(this.location.params.id)
    }
    render(id) {
        render(template(id), this)
    }
}

export default Edit