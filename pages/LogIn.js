const {I} = inject();

module.exports = {
    locators: {
        usernameInput: '#txt-username',
        passwordInput: '#txt-password',
        buttonLogin: '#btn-login',
        alertMessage: '.text-danger'
    },
    visit() {
        I.amOnPage('/profile.php#login');
        return this;
    },
    login(username, password) {
        I.fillField( this.locators.usernameInput, username);
        I.fillField( this.locators.passwordInput, password);
        I.click( this.locators.buttonLogin);
        return this;
    },
    checkUnsuccessfulLoginMessage() {
        I.see('Login failed! Please ensure the username and password are valid.', this.locators.alertMessage);
        return this;
    }
}