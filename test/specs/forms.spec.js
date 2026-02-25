const { expect } = require('chai');
const FormsPage = require('../pageobjects/forms.page');
const MenuPage = require('../pageobjects/menu.page');
const formsData = require('../../data/forms.data.json');

describe('Interações e Preenchimento de Formulários', () => {

    beforeEach(async () => {
        await MenuPage.goToForms();
    });

    it('Deve preencher campo de texto simples', async () => {
        const testText = 'Hello WebdriverIO';
        await FormsPage.fillForm(testText);
        
        await expect(await FormsPage.inputTextResult.getText()).to.equal(testText);
    });

    it('Deve interagir com os botões Active/Inactive na aba Forms', async () => {
        await FormsPage.btnActive.click();
        const alertTitle = await $('//*[@resource-id="android:id/alertTitle"]');
        await expect(await alertTitle.isDisplayed()).to.be.true;
        await $('//*[@text="OK"]').click();
        
        // Inactive is not clickable or visually disabled usually, we test if it gets clicked (no exception or alert expected in reality)
        await FormsPage.btnInactive.click();
    });

    // Data-Driven test
    formsData.forEach((data, index) => {
        it(`Deve validar preenchimento usando Data-Driven - Cenario ${index + 1}`, async () => {
            await FormsPage.setValue(await FormsPage.inputField, data.input);
            await expect(await FormsPage.inputTextResult.getText()).to.equal(data.input);
        });
    });
});
