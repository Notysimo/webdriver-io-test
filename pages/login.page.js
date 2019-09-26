function loginElements() {
    return {
        username: function () { return $('#login-username-input') },
        password: function () { return $('#login-password-input') },
        submitButton: function () { return $('#login-ok-button') }
    }
}

function loginMethods() {
    const element = loginElements()

    return {
        setInfoLogin: function (emailParam) {
            element.username().waitForExist()
            element.username().clearValue()
            element.username().setValue(emailParam)
        },

        setInfoPassword: function (password) {
            element.password().clearValue()
            element.password().setValue(password)
        },

        confirmLogin: function () {
            element.submitButton().click()
        }
    }
}

function login() {
    const login = loginMethods()

    return {
        fillForm: function (objLogin) {
            login.setInfoLogin(objLogin.username)
            login.setInfoPassword(objLogin.password)
            login.confirmLogin()
        }
    }
}

module.exports = login()