const BasePage = require('./base.page');

class LoginPage extends BasePage {
    get inputEmail() { return $('~input-email'); }
    get inputPassword() { return $('~input-password'); }
    get inputRepeatPassword() { return $('~input-repeat-password'); }
    get btnLogin() { return $('~button-LOGIN'); }
    get btnSignUpTab() { return $('~button-sign-up-container'); }
    get btnLoginTab() { return $('~button-login-container'); }
    get btnSignUp() { return $('~button-SIGN UP'); }
    
    get successMessageTitle() { return $('//*[@text="Success" or @text="Signed Up!"]'); }
    get btnOkSuccess() { return $('//*[@text="OK"]'); }
    get errorMessage() { return $('//*[@text="Please enter a valid email address"]'); }
    get authErrorMessage() { return $('//*[@text="Wrong email or password"]'); }

    async login(email, password) {
        await this.clickElement(await this.btnLoginTab);
        await this.setValue(await this.inputEmail, email);
        await this.setValue(await this.inputPassword, password);
        await this.clickElement(await this.btnLogin);
    }

    async signUp(email, password) {
        await this.clickElement(await this.btnSignUpTab);
        await this.setValue(await this.inputEmail, email);
        await this.setValue(await this.inputPassword, password);
        await this.setValue(await this.inputRepeatPassword, password);
        await this.clickElement(await this.btnSignUp);
    }
}

module.exports = new LoginPage();
