Feature('login');

Scenario.skip('check successfull login',  ({ I, logIn}) => {
    logIn.visit();
    logIn.login('John Doe', 'ThisIsNotAPassword');
    I.seeCurrentUrlEquals('/#appointment')
});

Scenario.skip('check login with wrong password',  ({ logIn }) => {
    logIn.visit();
    logIn.login('John Doe', 'ThisIsAPassword');
    logIn.checkUnsuccessfulLoginMessage();
});

Scenario.skip('check login with wrong login',  ({ logIn }) => {
    logIn.visit();
    logIn.login('JohnDoe', 'ThisIsNotAPassword');
    logIn.checkUnsuccessfulLoginMessage();
});

Scenario.skip('check login with empty user data',  ({ I, logIn }) => {
    logIn.visit();
    I.click(logIn.locators.buttonLogin);
    logIn.checkUnsuccessfulLoginMessage();
});

