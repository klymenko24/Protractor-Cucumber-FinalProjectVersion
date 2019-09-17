Feature: Login to the system as a Manager and add new customer

  Scenario: Open page and login
    Given I open page
    When  I choose manager account

  Scenario: Creating new customer with valid data
    When I choose Add Customer
    When I add customers from the list
      | First Name | Last Name | Post Code |
      | Tolya      | Potter    | 31071980  |
      | Tolya1     | Potter2   | 31071981  |
      | Tolya 1    | Potter2   | 31071982  |

  Scenario: Checking data in a table
    When I click on Customers button
    Then I check customer in table
    When I delete customer
    Then I check customer from the list not in table 
      | First_Name | Tolya    |
      | Last_Name  | Potter   |
      | Post_Code  | 31071980 |











