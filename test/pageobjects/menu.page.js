const BasePage = require('./base.page');

class MenuPage extends BasePage {
    get navLogin() { return $('~Login'); }
    get navForms() { return $('~Forms'); }
    get navSwipe() { return $('~Swipe'); }
    get navHome() { return $('~Home'); }
    get navWebView() { return $('~Webview'); }

    async goToLogin() {
        await this.clickElement(await this.navLogin);
    }

    async goToForms() {
        await this.clickElement(await this.navForms);
    }

    async goToSwipe() {
        await this.clickElement(await this.navSwipe);
    }

    async goToHome() {
        await this.clickElement(await this.navHome);
    }

    async goToWebView() {
        await this.clickElement(await this.navWebView);
    }
}

module.exports = new MenuPage();
