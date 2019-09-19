const {Given, When, Then} = require('cucumber');
const LoginPage = require('../Page/LoginPage');
const CustomersInfoPage = require('../Page/CustomersInfoPage');
const chai = require('chai');
const expect = chai.expect;

const newLoginPage = new LoginPage();
const customersInfoPage = new CustomersInfoPage();

Given('I open page', async () => {
    await newLoginPage.open();
});

When('I choose {string} account', async (string) => {
    await newLoginPage.login(string);
})

Then('I should see a menu with manager functions', async () => {
    await customersInfoPage.seeAddCustomerMain();
});

When('I choose Add Customer', async () => {
    await customersInfoPage.clickAddCustomerMain();
});

When('I add customers from the list', async data => {
    const userData = data.hashes();
    await customersInfoPage.createMultCustomers(userData);
});

When('I close alert message', async () => {
    await customersInfoPage.closeAlertMessage();
});

When('I click on Customers button', async () => {
    await customersInfoPage.clickCustomers();
});

Then('I check customer in table', async data => {
    const dataUser = data.rowsHash();
    const name = await customersInfoPage.findCustomer(dataUser.name);
    expect(name).to.equal(true);
});

When('I delete customer', async data => {
    const dataUser = data.rowsHash();
    await customersInfoPage.deleteByName(dataUser.name);
});

Then('I check customer is not in table', async () => {
    const dataUser = data.rowsHash();
    const name = await customersInfoPage.findCustomer(dataUser.name);
    expect(name).to.equal(false);
});

Then('I check customer from the list not in table', async data => {
    const result = data.rowsHash();
    const review = customersInfoPage.checkRemovalCustomer(result);
    expect(review, 'Customer in table from the list').to.be.empty;
});
