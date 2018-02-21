const chai = require("chai");

describe('Yandex search feature', function () {
    it('Search for WebdriverIO', function () {
        browser.url('https://yandex.ru');
        browser.waitForVisible('input[aria-label="Запрос"]');
        browser.setValue('input[aria-label="Запрос"]', 'WebdriverIO');
        browser.click('.suggest2-form__button');
        browser.waitForVisible('.organic__url-text');

        const firstResult = $$('.organic__url-text')[0].getText();

        chai.expect(firstResult).to.equal('WebdriverIO - WebDriver bindings for Node.js');
    });
});
