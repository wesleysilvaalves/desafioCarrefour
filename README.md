# Desafio de Automação de Testes Mobile - Banco Carrefour

Este projeto contém a automação de testes para o aplicativo `native-demo-app` utilizando o framework `WebdriverIO` associado ao `Appium`. 

## 🚀 Tecnologias e Ferramentas Utilizadas
- **Linguagem:** JavaScript (Node.js)
- **Framework:** WebdriverIO (WDIO)
- **Biblioteca:** Appium
- **Gerenciador de Testes:** Mocha
- **Asserts:** Chai
- **Relatórios:** Allure Report
- **Page Objects:** Padrão arquitetural utilizado para manter a manutenção do código simplificada.

## 📋 Pré-requisitos
Certifique-se de que o seu ambiente de desenvolvimento possui as seguintes ferramentas configuradas:
1. **Node.js** (v18 ou superior).
2. **Java JDK** (v11 ou superior) devidamente configurado nas variáveis de ambiente (`JAVA_HOME`).
3. **Android Studio** instalado, com um Emulador operante ou Aparelho Físico configurado no `adb` e variável `ANDROID_HOME` ativa.

## 🛠️ Configuração do Ambiente

1. Clone o projeto e instale as dependências:
   ```bash
   npm install
   ```

2. Certifique-se de que o APK que está testando, `android.wdio.native.app.v1.0.8.apk`, está contido na pasta `/app` com permissões de leitura. O script `npm install` baixa localmente as ferramentas mas certifique-se que você tenha o ADB reconhecendo seu emulador rodando o comando:
   ```bash
   adb devices
   ```

3. No arquivo `wdio.conf.js`, confira se a capability `appium:deviceName` mapeia corretamente para o nome do seu emulador (ex: `Pixel_6_Pro_API_33`):
   ```javascript
   'appium:deviceName': 'Nexus_5X_API_30', // Altere para o seu caso
   ```

## ▶️ Executando os Testes
Para executar os cenários de testes locais utilizando o Mocha:
```bash
npm run test
```

## 📊 Relatórios de Execução (Allure)
Capturas de tela são geradas caso algum teste falhe utilizando o hook `afterTest` nativo do WDIO.
Após a finalização dos testes, para compilar e abrir os relatórios da suíte Allure Report:
```bash
npm run report
```

Isso processará as provas geradas na pasta `allure-results` e abrirá uma página web navegável no seu navegador padrão.

## 🔄 Integração Contínua (CI/CD)
O repositório já contém um script base `.gitlab-ci.yml` que descreve o fluxo de testes automatizado disparado após commits/merge-requests no GitLab. Caso deseje acoplar uma infraestrutura de Device Farm (como BrowserStack), adicione suas credenciais como variáveis de CI (`BROWSERSTACK_USER` e `BROWSERSTACK_KEY`).
