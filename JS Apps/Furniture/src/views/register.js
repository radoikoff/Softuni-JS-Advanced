import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/api.js';

const registerTempate = (onSubmit, validation) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            ${validation.errMsg ? html`
            <div class="form-group">
                <p class="err-msg">${validation.errMsg}</p>
            </div>` : ''}
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class=${'form-control' + (validation.invalidEmail ? ' is-invalid' : '')} id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class=${'form-control' + (validation.invalidPass ? ' is-invalid' : '')} id="password" type="password" name="password">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class=${'form-control' + (validation.invalidRepass ? ' is-invalid' : '')} id="rePass" type="password" name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>`;


export async function registerPage(ctx) {
    ctx.render(registerTempate(onSubmit, {}));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('rePass').trim();

        
        if (email == '' || password == '' || repass == '') {
            const validation = {
                invalidEmail: email == '',
                invalidPass: password == '',
                invalidRepass: repass == '',
                errMsg: 'All fields are required!'
            };
            return ctx.render(registerTempate(onSubmit, validation))
        }

        if (password != repass) {
            const validation = {
                invalidEmail: true,
                invalidPass: false,
                invalidRepass: false,
                errMsg: 'Passwords don\'t match!'
            };
            return ctx.render(registerTempate(onSubmit, validation))
        }

        await register(email, password);
        ctx.setUserNav();
        ctx.page.redirect('/');
    }
}