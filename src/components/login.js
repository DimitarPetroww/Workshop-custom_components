import { Router } from 'https://unpkg.com/@vaadin/router'
import { html, render } from 'https://unpkg.com/lit-html?module';
import { loginUser } from "../api/auth.js"

const template = () => html`
<navigation-component></navigation-component>
<section id="form-login">
    <form class="text-center border border-light p-5" action="" method="" @submit="${onFormSubmit}">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</section>
`
async function onFormSubmit(e) {
    e.preventDefault()
    const data = [...new FormData(e.target)].reduce((a, [c, x]) => Object.assign(a, { [c]: x }), {})

    if (Object.values(data).some(x => x === "")) {
        return alert("All fields must be filled!")
    }
    const r = await loginUser({ email: data.email, password: data.password })

    sessionStorage.setItem("_id", r._id)
    sessionStorage.setItem("_token", r.accessToken)
    sessionStorage.setItem("user", r.email)
    Router.go("/")
}

class Login extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        render(template(), this)
    }
}

export default Login