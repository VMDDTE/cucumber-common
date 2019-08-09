Feature: Test that personas are working as expected

  Scenario Outline: Multiple personas are trying to log in
    Given I am <persona>
    Then I see the scene in the console
  Examples:
  | persona |
  | Robert Price |
  | Test User |
          