const { expect } = require('chai');
const LoginPage = require('../pageobjects/login.page');
const MenuPage = require('../pageobjects/menu.page');

describe('Login & Cadastro Funcionalidades', () => {

    beforeEach(async () => {
        await MenuPage.goToLogin();
    });

    it('Deve realizar cadastro com sucesso', async () => {
        // Gera um email aleatório para garantir o cadastro
        const randomEmail = `test_${Date.now()}@test.com`;
        await LoginPage.signUp(randomEmail, '12345678');
        
        await expect(await LoginPage.successMessageTitle.isDisplayed()).to.be.true;
        await LoginPage.clickElement(await LoginPage.btnOkSuccess);
    });

    it('Deve realizar login com sucesso', async () => {
        // Usa um login real ou teste
        await LoginPage.login('test@webdriver.io', 'Test1234!');
        
        await expect(await LoginPage.successMessageTitle.isDisplayed()).to.be.true;
        await LoginPage.clickElement(await LoginPage.btnOkSuccess);
    });

    it('Deve exibir mensagem de erro de autenticação', async () => {
        await LoginPage.login('test@webdriver.io', 'WrongPassword!');
        await expect(await LoginPage.authErrorMessage.isDisplayed()).to.be.true;
    });

    it('Deve exibir erro de formato de email no login', async () => {
        await LoginPage.login('invalid_email', 'Test1234!');
        await expect(await LoginPage.errorMessage.isDisplayed()).to.be.true;
    });
});
