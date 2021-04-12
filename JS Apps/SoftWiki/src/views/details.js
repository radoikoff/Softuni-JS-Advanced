import { html } from '../../node_modules/lit-html/lit-html.js';
import { getArticleById, deleteArticle } from '../api/data.js';

const detailsTemplate = (article, onDelete, isOwner) => html`
<section id="details-page" class="content details">
    <h1>${article.title}</h1>

    <div class="details-content">
        <strong>Published in category ${article.category}</strong>
        <p>${article.content}</p>


        <div class="buttons">
            ${isOwner ? html`
            <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
            <a href=${'/edit/' + article._id} class="btn edit">Edit</a>
            ` : ''}
            <a href="/catalog" class="btn edit">Back</a>
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {

    const articleId = ctx.params.id;
    const article = await getArticleById(articleId);

    const isOwner = ctx.user && ctx.user._id == article._ownerId;

    ctx.render(detailsTemplate(article, onDelete, isOwner));

    async function onDelete() {
        const confirmed = confirm('Are you sure wou want ot delete this article?');
        if (confirmed) {
            await deleteArticle(articleId);
            ctx.page.redirect('/');
        }
    }
};
