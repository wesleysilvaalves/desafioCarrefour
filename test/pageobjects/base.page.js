/**
 * Base Page Object
 * Contém métodos genéricos que podem ser usados por todas as páginas
 */
class BasePage {
    /**
     * Espera um elemento aparecer e clica nele
     * @param {WebdriverIO.Element} element 
     */
    async clickElement(element) {
        await element.waitForDisplayed({ timeout: 10000 });
        await element.click();
    }

    /**
     * Espera um elemento aparecer e define o seu valor
     * @param {WebdriverIO.Element} element 
     * @param {string} value 
     */
    async setValue(element, value) {
        await element.waitForDisplayed({ timeout: 10000 });
        await element.setValue(value);
    }
}

module.exports = BasePage;
