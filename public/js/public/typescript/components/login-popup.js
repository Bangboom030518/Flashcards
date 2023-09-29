"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPopup = void 0;
const loginPopup = document.createElement('dialog');
exports.loginPopup = loginPopup;
loginPopup.innerHTML =
    `
<div class="scroll-container">
    <button class='btn-close'>
        <img src='icons/close.svg' alt='close'>
    </button>
    <h2>Login</h2>
    <form method='POST'>
        <div class='input input-primary'>
            <input type='text' name='email' id='email' autocomplete='email' required>
            <label for='email'>Email</label>
            <span></span>
        </div>
        <br>
        <div class='input input-primary'>
            <input type='password' name='password' id='password' autocomplete='current-password' required>
            <label for='password'>Password</label>
            <span></span>
        </div>
        <br>
        <div class='checkbox-container'>
            <label for='remember-login'>Keep me signed in?</label>
            <label class='checkbox'>
                <input type='checkbox' id='remember-login' name='remember-login' value='true' checked>
                <span class='checkmark'></span>
            </label>
        </div>
        <br>
        <fieldset class='btn-container'>
            <button type='submit' class='btn-success'>Login</button>
            <button class='btn-warn' type='reset'>Forgot Password</button>
        </fieldset>
    </form>
    <p>Don't have an account?</p>
    <a href='javascript:void(0)' class='btn-primary-outline'>
        Sign Up
    </a>
</div>`;
loginPopup.setAttribute('id', 'login-popup');
loginPopup.setAttribute('class', 'popup');
