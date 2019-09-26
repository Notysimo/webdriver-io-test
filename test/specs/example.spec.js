const loginPage = require('../../pages/login.page')

describe('JDS - Login', () => {
    it('Login JDS page', () => {
        browser.url('https://172.21.19.33/');
        const dataUser = {
            username: 'super', 
            password: 'jds2*123'
        };
        loginPage.fillForm(dataUser);

        const title = browser.getTitle();
        console.log('Title is: ' + title);
    })
})