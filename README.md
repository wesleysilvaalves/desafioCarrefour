# Desafio de Automação de Testes Mobile - Banco Carrefour

Este projeto contém a automação de testes para o aplicativo native-demo-app utilizando o framework WebdriverIO associado ao Appium. 

## Tecnologias e Ferramentas Utilizadas
- Linguagem: JavaScript (Node.js)
- Framework: WebdriverIO (WDIO)
- Biblioteca: Appium
- Gerenciador de Testes: Mocha
- Asserts: Chai
- Relatórios: Allure Report
- Padrão de Arquitetura: Page Objects

## Pré-requisitos
Certifique-se de que o seu ambiente de desenvolvimento possui as seguintes ferramentas configuradas:
1. Node.js (v18 ou superior).
2. Java JDK (v11 ou superior) configurado nas variáveis de ambiente (JAVA_HOME).
3. Android Studio instalado, com um Emulador operante ou Aparelho Físico configurado no adb e variável ANDROID_HOME ativa.

## Configuração do Ambiente

1. Clone o projeto e instale as dependências:
   ```bash
   npm install
   ```

2. Certifique-se de que o APK que está testando, android.wdio.native.app.v1.0.8.apk, está contido na pasta /app com permissões de leitura. Para validar se o ADB está reconhecendo seu emulador de Android, rode o comando:
   ```bash
   adb devices
   ```

3. No arquivo wdio.conf.js, confira se a capability appium:deviceName mapeia corretamente para o nome do seu emulador:
   ```javascript
   'appium:deviceName': 'Pixel_5_API_33', // Altere para o seu emulador caso necessário
   ```

## Executando os Testes
Para executar os cenários de testes locais utilizando o Mocha:
```bash
npm run test
```

Para rodar os testes na nuvem do BrowserStack (necessário configurar BROWSERSTACK_USER e BROWSERSTACK_KEY nas variáveis de ambiente):
```bash
npx wdio run wdio.bs.conf.js
```

## Relatórios de Execução (Allure)
Capturas de tela são geradas automaticamente caso algum teste falhe, utilizando o hook afterTest do WebdriverIO.
Após a finalização dos testes, para compilar e abrir os relatórios do Allure Report:
```bash
npm run report
```
Isso processará as evidências geradas na pasta allure-results e abrirá uma página web no seu navegador padrão.

## Integração Contínua (CI/CD)
O repositório contém o script .gitlab-ci.yml que aproxima o fluxo de testes automatizado para rodar integrado a commits/merge-requests no GitLab. Caso deseje rodar a infraestrutura de Nuvem, basta adicionar as credenciais do BrowserStack nas secrets de CI/CD do repositório.
