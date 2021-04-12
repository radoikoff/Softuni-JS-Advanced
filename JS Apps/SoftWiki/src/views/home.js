import { html } from '../../node_modules/lit-html/lit-html.js';
import { getRecentArticles } from '../api/data.js';
import { articleTemplate } from './common/article.js';



const homeTemplate = (articles) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
        <h2>JavaScript</h2>
        ${articles.js.length > 0 ? articles.js.map(articleTemplate) : noArticlesTemplate}
    </section>
    <section class="recent csharp">
        <h2>C#</h2>
        ${articles.csharp.length > 0 ? articles.csharp.map(articleTemplate) : noArticlesTemplate}
    </section>
    <section class="recent java">
        <h2>Java</h2>
        ${articles.java.length > 0 ? articles.java.map(articleTemplate) : noArticlesTemplate}
    </section>
    <section class="recent python">
        <h2>Python</h2>
        ${articles.python.length > 0 ? articles.python.map(articleTemplate) : noArticlesTemplate}
    </section>
</section>`;

const noArticlesTemplate = html`<h3 class="no-articles">No articles yet</h3>`;

export async function homePage(ctx) {
    const articles = await getRecentArticles();
    const articlesByCategory = {
        js: articles.filter(a => a.category == 'JavaScript'),
        csharp: articles.filter(a => a.category == 'C#'),
        java: articles.filter(a => a.category == 'Java'),
        python: articles.filter(a => a.category == 'Python')
    };

    ctx.render(homeTemplate(articlesByCategory));
};


