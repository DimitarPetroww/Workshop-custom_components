import { Router } from 'https://unpkg.com/@vaadin/router'
import Navigation from "./components/navigation.js"
import Movies from "./components/movies.js"
import Home from "./components/home.js"
import Register from "./components/register.js"
import Login from "./components/login.js"
import Logout from "./components/logout.js"
import Details from "./components/details.js"
import Create from "./components/create.js"

customElements.define("navigation-component", Navigation)
customElements.define("movies-component", Movies)
customElements.define("home-component", Home)
customElements.define("register-component", Register)
customElements.define("login-component", Login)
customElements.define("logout-component", Logout)
customElements.define("details-component", Details)
customElements.define("create-component", Create)


const router = new Router(document.querySelector("main"))
router.setRoutes([
    { path: "/", component: "home-component" },
    { path: "/register", component: "register-component" },
    { path: "/login", component: "login-component" },
    { path: "/logout", component: "logout-component" },
    { path: "/details/:id", component: "details-component"}
])