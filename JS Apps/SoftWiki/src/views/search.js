import { html } from '../../node_modules/lit-html/lit-html.js';
import { search } from '../api/data.js';
import { articlePreviewTemplate } from './common/article.js';


const searchTemplate = (articles, onSearch, title) => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form @submit=${onSearch} id="search-form">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search" .value=${title || ''}>
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
        ${articles.length > 0 ? articles.map(articlePreviewTemplate) : noArticlesTemplate}
    </div>
</section>
`;
const noArticlesTemplate = html`<h3 class="no-articles">No matching articles</h3>`;


export async function searchPage(ctx) {
    const title = ctx.querystring.split('=')[1];
    const articles = (title) ? await search(title) : [];

    ctx.render(searchTemplate(articles, onSearch, title));

    async function onSearch(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const query = formData.get('search').trim();
        ctx.page.redirect('/search?title=' + query);
    }
};
