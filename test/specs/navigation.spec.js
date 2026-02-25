const { expect } = require('chai');
const MenuPage = require('../pageobjects/menu.page');

describe('Testes de Navegação do Menu Inferior', () => {

    it('Deve navegar para a tela Swipe', async () => {
        await MenuPage.goToSwipe();
        const title = await $('//*[@text="Swipe horizontal"]');
        await expect(await title.isDisplayed()).to.be.true;
    });

    it('Deve navegar para a aba Webview', async () => {
        await MenuPage.goToWebView();
        const webviewText = await $('//*[@text="WebdriverIO"]');

        // Note: It might take time to load the webview, waiting for the container first
        await webviewText.waitForDisplayed({ timeout: 15000 });
        await expect(await webviewText.isDisplayed()).to.be.true;
    });

    it('Deve retornar para a Home', async () => {
        await MenuPage.goToHome();
        const homeLogo = await $('~WEBDRIVER');
        await expect(await homeLogo.isDisplayed()).to.be.true;
    });
});
