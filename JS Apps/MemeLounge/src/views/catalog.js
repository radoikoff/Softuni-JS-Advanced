import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMemes } from '../api/data.js';
import { memeTemplate } from './common/meme.js';

const catalogTemplate = (memes) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        ${memes.length > 0 ? memes.map(memeTemplate) : html`<p class="no-memes">No memes in database.</p>`}
    </div>
</section>`;

export async function catalogPage(ctx) {
    const memes = await getMemes();

    ctx.render(catalogTemplate(memes));
};
