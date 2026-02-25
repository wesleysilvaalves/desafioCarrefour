const BasePage = require('./base.page');

class FormsPage extends BasePage {
    get inputField() { return $('~text-input'); }
    get switch() { return $('~switch'); }
    get dropdown() { return $('~Dropdown'); }
    get btnActive() { return $('~button-Active'); }
    get btnInactive() { return $('~button-Inactive'); }
    
    get inputTextResult() { return $('~input-text-result'); }
    get switchTextResult() { return $('~switch-text'); }


    async fillForm(text) {
        await this.setValue(await this.inputField, text);
        await this.clickElement(await this.switch);
    }
}

module.exports = new FormsPage();
