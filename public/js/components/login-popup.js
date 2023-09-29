"use strict";
exports.__esModule = true;
exports.loginPopup = void 0;
var loginPopup = document.createElement('dialog');
exports.loginPopup = loginPopup;
loginPopup.innerHTML =
    "\n<div class=\"scroll-container\">\n    <button class='btn-close'>\n        <img src='icons/close.svg' alt='close'>\n    </button>\n    <h2>Login</h2>\n    <form method='POST'>\n        <div class='input input-primary'>\n            <input type='text' name='email' id='email' autocomplete='email' required>\n            <label for='email'>Email</label>\n            <span></span>\n        </div>\n        <br>\n        <div class='input input-primary'>\n            <input type='password' name='password' id='password' autocomplete='current-password' required>\n            <label for='password'>Password</label>\n            <span></span>\n        </div>\n        <br>\n        <div class='checkbox-container'>\n            <label for='remember-login'>Keep me signed in?</label>\n            <label class='checkbox'>\n                <input type='checkbox' id='remember-login' name='remember-login' value='true' checked>\n                <span class='checkmark'></span>\n            </label>\n        </div>\n        <br>\n        <fieldset class='btn-container'>\n            <button type='submit' class='btn-success'>Login</button>\n            <button class='btn-warn' type='reset'>Forgot Password</button>\n        </fieldset>\n    </form>\n    <p>Don't have an account?</p>\n    <a href='javascript:void(0)' class='btn-primary-outline'>\n        Sign Up\n    </a>\n</div>";
loginPopup.setAttribute('id', 'login-popup');
loginPopup.setAttribute('class', 'popup');
