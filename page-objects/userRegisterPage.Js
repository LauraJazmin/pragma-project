module.exports = {

    url: 'http://automationpractice.com/index.php',

    elements: {
        singInButton: by.css('.login'),
        emailAddress: by.id('email_create'),
        createCountButton: by.id('SubmitCreate'),
        genderOption: by.id('id_gender2'),
        firstName: by.id('customer_firstname'),
        lastName: by.id('customer_lastname'),
        password: by.id('passwd'),
        // FALTA FECHA DE CUMPLEAÑOS
        company: by.id('Company'),
        city: by.id('city'),
        PostalCode: by.id('postcode'),

        phoneMobile: by.id('phone'),
        phoneMobile: by.id('phone_mobile'),

        countRegister: by.class('account')

    },

    /**
     * Goes to registration page
     */
    goToRegistration: function () {
        var selector = page.userRegister.elements.singInButton;
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    },
    writeEmail : function () {
        var selector = page.userRegister.elements.emailAddress;
        return driver.findElement(selector).sendKeys(searchQuery, selenium.sendKeys);
    },
    goToForm: function () {
        var selector = page.userRegister.elements.createCountButton;
        return driver.findElement(selector).click();
    },
    genderSelect: function () {
        var selector = page.userRegister.elements.genderOption;        
        return driver.findElement(selector).click();
    },
    writeFirsName : function () {
        var selector = page.userRegister.elements.firstName;
        return driver.findElement(selector).sendKeys(searchQuery, selenium.sendKeys);
    },
    writeLastName : function () {
        var selector = page.userRegister.elements.lastName;
        return driver.findElement(selector).sendKeys(searchQuery, selenium.sendKeys);
    },
    writepassword: function () {
        var selector = page.userRegister.elements.password;
        return driver.findElement(selector).sendKeys(searchQuery, selenium.sendKeys);
    },
    writeNameCompay : function () {
        var selector = page.userRegister.elements.company;
        return driver.findElement(selector).sendKeys(searchQuery, selenium.sendKeys);
    },
    writeLastAddress : function () {
        var selector = page.userRegister.elements.address;
        return driver.findElement(selector).sendKeys(searchQuery, selenium.sendKeys);
    },

    
};