const { config } = require('./wdio.conf');

// As credenciais do BrowserStack serão passadas via variáveis de ambiente
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

// Definindo o serviço
config.services = ['browserstack'];

// Ajustando as capabilities para rodar na Nuvem da BrowserStack
config.capabilities = [{
    'bstack:options': {
        projectName: 'Carrefour Automacao',
        buildName: 'BrowserStack Build Test',
        sessionName: 'BStack Test',
        debug: 'true',
        networkLogs: 'true'
    },
    platformName: 'android',
    'appium:platformVersion': '13.0',
    'appium:deviceName': 'Google Pixel 7',
    // OBS: No BrowserStack App Automate você DEVE primeiro fazer o upload do APK 
    // ou passar o caminho local aqui (o WDIO faz o upload via browserstack-service automaticamente na V8+)
    'appium:app': process.cwd() + '/app/android.wdio.native.app.v1.0.8.apk',
    'appium:automationName': 'UiAutomator2',
    'appium:autoGrantPermissions': true
}];

exports.config = config;
