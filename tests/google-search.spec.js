const chai = require("chai");

describe('Google search feature', function () {
    it('Search for WebdriverIO', function () {
        browser.url('https://google.com');
        browser.waitForVisible('input[name=q]');
        browser.setValue('input[name=q]', 'WebdriverIO');
        browser.waitForVisible('.sbsb_g [value="Поиск в Google"]');
        browser.click('.sbsb_g [value="Поиск в Google"]');
        browser.waitForVisible('h3 > a');

        const firstResult = $$('h3 > a')[0].getText();

        chai.expect(firstResult).to.equal('WebdriverIO - WebDriver bindings for Node.js');
    });
});
