import { Router } from 'https://unpkg.com/@vaadin/router'
import Navigation from "./components/navigation.js"
import Home from "./components/home.js"
import Register from "./components/register.js"
import Login from "./components/login.js"
import Logout from "./components/logout.js"

customElements.define("navigation-component", Navigation)
customElements.define("home-component", Home)
customElements.define("register-component", Register)
customElements.define("login-component", Login)
customElements.define("logout-component", Logout)


const router = new Router(document.querySelector("main"))
router.setRoutes([
    { path: "/", component: "home-component" },
    { path: "/register", component: "register-component" },
    { path: "/login", component: "login-component" },
    { path: "/logout", component: "logout-component" },
])