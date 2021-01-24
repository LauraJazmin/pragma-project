module.exports = {

    url: 'http://automationpractice.com/index.php',

    elements: {
        singInButton: by.css('.login') 
    },

    /**
     * Goes to registration page
     */
    goToRegistration: function () {
        var selector = page.loginPage.elements.singInButton;
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};