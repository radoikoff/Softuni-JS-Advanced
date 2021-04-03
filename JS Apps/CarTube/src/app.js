import { render } from '../../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { detailsPage } from './views/details.js';
import { getUserData } from './utility.js';
import { homePage } from './views/home.js';
import { catalogPage } from './views/catalog.js';
import { loginPage, registerPage } from './views/auth.js';
import { logout } from './api/api.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { myListingsPage } from './views/myListings.js';
import { searchPage } from './views/search.js';

//import * as api from './api/data.js';
//window.api = api;

const main = document.getElementById('site-content');
page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);

page('/catalog', decorateContext, catalogPage);
page('/details/:id', decorateContext, detailsPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/my-listings', decorateContext, myListingsPage);
page('/search', decorateContext, searchPage);


document.getElementById('logoutBtn').addEventListener('click', () => {
    logout();
    setUserNav();
    page.redirect('/');
});

setUserNav();

//app start
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    ctx.user = getUserData();
    next();
}

function setUserNav() {
    const user = getUserData();
    if (user) {
        document.getElementById('profile').style.display = '';
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user-greeting').textContent = `Welcome ${user.username}`
    } else {
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = '';
    }
}