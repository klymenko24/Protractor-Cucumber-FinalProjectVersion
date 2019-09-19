const BasePage = require('./BasePage');
class CustomersInfoPage extends BasePage {
    constructor() {
        super();
        this.clickAddBtn = $('[ng-click="addCust()"]'),
        this.CustomerNameField = $('[ng-model="fName"]'),//
        this.CustomerLastNameField = $('[ng-model="lName"]'),//
        this.CustomerPostCodeField = $('[ng-model="postCd"]'),//
        this.customerAddBtn = $('.btn-default'),
        this.customersBtn = $('[ng-click="showCust()"]'),
        this.deleteBtn = $('tr:nth-child(6) > td:nth-child(5) > button'),
        this.wholeTable = $$('.table tbody tr'),
        this.firstNameColumn = 'td:nth-of-type(1)',
        this.lastNameColumn = 'td:nth-of-type(2)',
        this.postCodeColumn = 'td:nth-of-type(3)',
        this.deleteCustomerColumn = 'button[ng-click="deleteCust(cust)"]',
        this.ourTable = '.table'
    }

    async clickAddCustomerMain() {
        await this.clickAddBtn.click();
    }

    async seeAddCustomerMain() {
        await this.clickAddBtn.isPresent();
    }

    async addFirstName(name) {
        await this.CustomerNameField.click().sendKeys(name);
    }

    async addLastName(lastname) {
        await this.CustomerLastNameField.click().sendKeys(lastname);
    }

    async addPostCode(number) {
        await this.CustomerPostCodeField.click().sendKeys(number);
    }

    async clickAddCustomer() {
        await this.customerAddBtn.click();
    }

    async checkAlertText() {
        const alertDialog =  await browser.switchTo().alert();
        return alertDialog.getText();
    }

    async closeAlertMessage() {
        await browser.switchTo().alert().accept();
    }

    async createMultCustomers(userData) {
        for (let item of userData) {
            await this.addFirstName(item['First Name']);
            await this.addLastName(item['Last Name']);
            await this.addPostCode(item['Post Code']);
            await this.clickAddCustomer();
            await this.closeAlertMessage();
        }
    }

    async clickCustomers() {
        await this.customersBtn.click();
    }

    async clickDeleteCustomer() {
        await this.deleteBtn.click();
    }

    async findCustomer(name) {
        return element(by.cssContainingText(this.ourTable, name)).isPresent();
    }

    async deleteByName(name) {
        const infoFromTable = await this.wholeTable.filter(async row => {
            const title = await row.$(this.firstNameColumn).getText()
            return title === name
        })
        await infoFromTable[0].$(this.deleteCustomerColumn).click();
    }

    async checkRemovalCustomer() {
        const infoFromTable = await this.wholeTable.filter(async row => {
            const title = await row.$(this.firstNameColumn).getText();
            const lastName = await row.$(this.lastNameColumn).getText();
            const postCode = await row.$(this.postCodeColumn).getText();
            return result.First_Name === title && result.Last_Name === lastName && result.Post_Code === postCode;
        })
        return infoFromTable;
    }
}

module.exports = CustomersInfoPage;
