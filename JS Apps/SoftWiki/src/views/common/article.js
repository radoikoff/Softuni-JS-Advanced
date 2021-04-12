import { html } from '../../../node_modules/lit-html/lit-html.js';

export const articleTemplate = (article) => html`
    <article>
        <h3>${article.title}</h3>
        <p>${article.content}</p>
        <a href=${'/details/' + article._id} class="btn details-btn">Details</a>
    </article>`;



export const articlePreviewTemplate = (article) => html`
    <a class="article-preview" href=${'/details/' + article._id}>
        <article>
            <h3>Topic: <span>${article.title}</span></h3>
            <p>Category: <span>${article.category}</span></p>
        </article>
    </a>`;