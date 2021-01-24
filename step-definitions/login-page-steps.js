module.exports = function () {

    this.When(/^I go to login$/, function () {

        return helpers.loadPage('http://automationpractice.com/index.php').then(function() {

            // use a method on the page object which also returns a promise
            return page.loginPage.goToRegistration();
        });
    });

    this.Then(/^I see the Title of the login page$/, function () {

        // resolves if an item on the page contains text
        return driver.wait(until.elementsLocated(by.id('email_create')), 10000);
    });
};