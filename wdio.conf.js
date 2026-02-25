const path = require('path');

exports.config = {
    runner: 'local',
    port: 4723, // Appium port
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel_5_API_33', // Emulador detectado dinamicamente
        'appium:platformVersion': '13.0',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android.wdio.native.app.v1.0.8.apk'),
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'appium:noReset': false,
        'appium:fullReset': false
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
}
