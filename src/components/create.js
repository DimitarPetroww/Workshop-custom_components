import { Router } from 'https://unpkg.com/@vaadin/router'
import { html, render } from 'https://unpkg.com/lit-html?module';

const template = () => html`
<navigation-component></navigation-component>
<section id="form-sign-up">
    <form class="text-center border border-light p-5" action="#" method="post" @submit="">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value="">
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>
`
class Create extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        render(template(), this)
    }
}

export default Create