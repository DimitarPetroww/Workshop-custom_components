import { html, render } from 'https://unpkg.com/lit-html?module';
import { Router } from 'https://unpkg.com/@vaadin/router'
import { logoutUser } from "../api/auth.js"

const template = () => html` <home-component></home-component> `;

class Logout extends HTMLElement {
    connectedCallback() {
        this.logout(sessionStorage.getItem("_token"))
    }
    render() {
        render(template(), this)
    }
    async logout(token) {
        await logoutUser(token)
        this.render()
    }
}

export default Logout