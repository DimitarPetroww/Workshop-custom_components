import { html, render } from 'https://unpkg.com/lit-html?module';

const template = (isAuthenticated) => html`
<navigation-component></navigation-component>
<section id="home-page">
    <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
        <img src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
            class="img-fluid" alt="Responsive image" style="width: 150%; height: 200px">
        <h1 class="display-4">Movies</h1>
        <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
    </div>
    ${isAuthenticated ? html `<movies-component></movies-component>` : ""}
</section>
`

class Home extends HTMLElement {
    connectedCallback() {
        this.render(sessionStorage.getItem("user"))
    }
    render(user) {
        render(template(Boolean(user)), this)
    }
}

export default Home