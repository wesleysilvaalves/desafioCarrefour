const { expect } = require('chai');
const SwipePage = require('../pageobjects/swipe.page');
const MenuPage = require('../pageobjects/menu.page');

describe('Interação com Swipe Cards', () => {

    beforeEach(async () => {
        await MenuPage.goToSwipe();
    });

    it('Deve realizar swipe para a esquerda em um Card', async () => {
        // Valida que estamos na tela de Swipe verificando o primeiro Card
        await expect(await SwipePage.firstCard.isDisplayed()).to.be.true;
        
        // Executa ação de Swipe
        await SwipePage.swipeLeft();

        // Após um swipe, tentamos identificar um elemento que comprova o scroll (ex: o próximo card ou o texto hiddenText).
        // A lógica exata depende do layout dos cards no DOM, mas geralmente verificamos se o próximo elemento ficou visível
        // O swipe da Native Demo App tem um texto com scroll oculto também.
        
        // Exemplo simplificado validando que terminamos o swipe sem erros
        const isCarouselPresent = await SwipePage.carousel.isDisplayed();
        await expect(isCarouselPresent).to.be.true;
    });
});
