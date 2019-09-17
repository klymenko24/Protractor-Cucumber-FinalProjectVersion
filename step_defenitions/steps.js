const {Given, When, Then} = require('cucumber');
const LoginPage = require('../Page/LoginPage.js.js');
const CustomersInfoPage = require('../Page/CustomersInfoPage');
const CustomersDataPage = require('../Page/CustomersDataPage');
const chai = require('chai');
const expect = chai.expect;

const newLoginPage = new LoginPage();
const customersInfoPage = new CustomersInfoPage();

Given('I open page', async function () {
    await newLoginPage.open();
});

When('I choose manager account', async function () {
    await newLoginPage.login('manager')
});

When('I choose Add Customer', async function () {
    await customersInfoPage.clickAddCustomerMain()
});

When('I add customers from the list', async data => {
    const userData = data.hashes();
    for (item of userData) {
        await customersInfoPage.addFirstName(item['First Name']);
        await customersInfoPage.addLastName(item['Last Name']);
        await customersInfoPage.addPostCode(item['Post Code'])
        await customersInfoPage.clickAddCustomer()
        await customersInfoPage.closeAlertMessage()
    }
})

When('I close alert message', async function () {
        await customersInfoPage.closeAlertMessage();
    })

When('I click on Customers button', async function () {
        await customersInfoPage.clickCustomers()
    })

Then('I check customer in table', async function () {
        await customersInfoPage.findCustomer(CustomersDataPage.name).then(function (text) {
            expect(text).to.equal(true)
        })
    })

When('I delete customer', async function () {
        await customersInfoPage.deleteByName(CustomersDataPage.name)
    })

Then('I check customer is not in table', async function () {
        await customersInfoPage.findCustomer(CustomersDataPage.name).then(function (text) {
        expect(text).to.equal(false)
        })
    })

Then('I check customer from the list not in table', async data => {
    const result = data.rowsHash();
    const arr = await $$('.table tbody tr').filter(async row => {
        const title = await row.$('td:nth-of-type(1)').getText()
        const lastName = await row.$('td:nth-of-type(2').getText()
        const postCode = await row.$('td:nth-of-type(3)').getText()
        return result.First_Name === title && result.Last_Name === lastName && result.Post_Code === postCode
    })
    console.log(arr)
    expect(arr, 'Customer in table from the list').to.be.empty;
})
