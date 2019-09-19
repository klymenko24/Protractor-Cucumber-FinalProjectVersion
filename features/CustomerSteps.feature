Feature: Login to the system as a Manager and add new customer

  Scenario: Open page and login
    Given I open page
    When  I choose manager account
    Then  I see a menu with manager functions
 
  Scenario: Creating new customer with valid data
    When I choose Add Customer
    And  I add customers from the list
      | First Name | Last Name | Post Code |
      | Tolya      | Potter    | 31071980  |
      | Tolya1     | Potter2   | 31071981  |
      | Tolya 1    | Potter2   | 31071982  |
    And I click on Customers button
    Then I check customer in table
      | name | Tolya |

  Scenario: Checking data in a table
    When I click on Customers button
    Then I check customer in table
      | name | Tolya |
    And I delete customer
      | name | Tolya |
    Then I check customer from the list not in table
      | First Name | Tolya    |
      | Last Name  | Potter   |
      | Post Code  | 31071980 |











