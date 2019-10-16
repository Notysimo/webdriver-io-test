const loginPage = require('../../pages/login.page');
const assert = require('assert');

describe('automation practice - Login', () => {
    it('Login JDS page', () => {
        browser.url('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        const dataUser = {
            username: 'notysimo@gmail.com', 
            password: 'Control123'
        };
        loginPage.fillForm(dataUser);
        const title = browser.getTitle();
        assert.equal(title, 'My account - My Store');
        console.log('Title is: ' + title);
    })
})