import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMemeById, deleteMeme } from '../api/data.js';

const detailsTemplate = (meme, onDelete, isOwner) => html`
<section id="meme-details">
    <h1>${'Meme Title: ' + meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>

            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${isOwner ? html`<a class="button warning" href=${'/edit/' + meme._id}>Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>` : ''}

        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {

    const memeId = ctx.params.id;
    const meme = await getMemeById(memeId);

    const isOwner = ctx.user && ctx.user._id == meme._ownerId;

    ctx.render(detailsTemplate(meme, onDelete, isOwner));

    async function onDelete() {
        const confirmed = confirm('Are you sure wou want ot delete this meme?');
        if (confirmed) {
            await deleteMeme(memeId);
            ctx.page.redirect('/catalog');
        }
    }
};
