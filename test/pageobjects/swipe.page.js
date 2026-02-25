const BasePage = require('./base.page');

class SwipePage extends BasePage {
    get carousel() { return $('~Carousel'); }
    get firstCard() { return $('(//android.view.ViewGroup[@content-desc="card"])[1]'); }
    get hiddenText() { return $('~Webview'); }

    // This swipe method relies on WebdriverIO actions
    async swipeLeft() {
        const { width, height } = await driver.getWindowRect();
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: width * 0.8, y: height * 0.5 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 500, origin: 'pointer', x: -width * 0.6, y: 0 },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
    }
}

module.exports = new SwipePage();
