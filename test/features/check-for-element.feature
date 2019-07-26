Feature: Check for element

  Goes through the data table to check for various different types of dom elements.
  First to check they exist, then to check they are visible

  Scenario Outline: Check element exists
    Given I am on the Kitchen Sink page
    Then the Go Somewhere <element> exists
    
  Examples:
    | element |
    | option |
    | link |
    
  Scenario Outline: Check element is visible
    Given I am on the Kitchen Sink page
    Then I see the Go Somewhere <element>

  Examples:
    | element |
    | option |
    | link |

  Scenario: Check element is visible
    Given I am on the Kitchen Sink page
    Then the Go Nowhere link does not exist