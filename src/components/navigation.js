import { html, render } from 'https://unpkg.com/lit-html?module';

const template = (data) => html`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <a class="navbar-brand text-light" href="/">Movies</a>
    <ul class="navbar-nav ml-auto ">
        ${data.user 
        ? html`
        <li class="nav-item">
            <a class="nav-link">Welcome, ${data.user}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/logout">Logout</a>
        </li>`
        : html`
         <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/register">Register</a>
        </li>`}
    </ul>
</nav>
`
class Navigation extends HTMLElement {
    connectedCallback() {
        const data = {
            user: sessionStorage.getItem("user"),
        }
        this.render(data)
    }
    render(data) {
        render(template(data), this)
    }
}

export default Navigation