Feature('history');

Scenario('check go homepage button',  ({ I,logIn, history}) => {
    logIn.visit().login('John Doe', 'ThisIsNotAPassword');
    history.visit();
    history.clickBackToHomepage();
    I.seeCurrentUrlEquals('/')
});