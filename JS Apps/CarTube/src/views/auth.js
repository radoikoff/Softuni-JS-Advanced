import { html } from '../../node_modules/lit-html/lit-html.js';
import { login, register } from '../api/data.js';


const loginTemplate = (onSubmit) => html`
<section id="login">
    <div class="container">
        <form @submit=${onSubmit} id="login-form" action="#" method="post">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>`;

const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="container">
        <form @submit=${onSubmit} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass">
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>`;


export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();

        await login(username, password);
        event.target.reset();
        ctx.setUserNav();
        ctx.page.redirect('/catalog');
    }
}

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('repeatPass').trim();

        if (!username || !password || !repass) {
            return alert('All fields are required!');
        }

        if (password != repass) {
            return alert('passwords don\'t match!');
        }

        await register(username, password);
        event.target.reset();
        ctx.setUserNav();
        ctx.page.redirect('/catalog');
    }
}