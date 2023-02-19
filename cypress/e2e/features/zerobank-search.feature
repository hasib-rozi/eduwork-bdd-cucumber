Feature: Search data from Zero Bank Web
  
  Scenario: Opening Zero Bank Web
    Given A user opens Zero Bank webpage
    When A user type "Bills" in the search field and press Enter
    Then A user should see the result