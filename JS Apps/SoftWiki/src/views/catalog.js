import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllArticles } from '../api/data.js';
import { articlePreviewTemplate } from './common/article.js';

const catalogTemplate = (articles) => html`
<section id="catalog-page" class="content catalogue">
    <h1>All Articles</h1>

    ${articles.length > 0 ? articles.map(articlePreviewTemplate) : noArticlesTemplate}
</section>`;

const noArticlesTemplate = html`<h3 class="no-articles">No articles yet</h3>`;

export async function catalogPage(ctx) {
    const articles = await getAllArticles();

    ctx.render(catalogTemplate(articles));
};
