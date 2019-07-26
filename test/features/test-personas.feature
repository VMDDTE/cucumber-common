Feature: Test that personas are working as expected

  Scenario Outline: Multiple personas are trying to log in
    Given I am logged in as <persona>
    Then I see the persona
  Examples:
  | persona |
  | Robert Price |
  | Test User |
          