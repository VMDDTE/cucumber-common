Feature: Click Element

  Clicks on an element
   
  Scenario Outline: Click element
    Given I am on the Kitchen Sink page
    Then I click on the Go Somewhere <element>

  Examples:
    | element |
    | option |
    | link |

  Scenario Outline: Click Radio
    Given I am on the Forms page
    Then I click on the Radio Option 1 <element>

  Examples:
    | element |
    | option |

Scenario Outline: Click Checkbox
    Given I am on the Forms page
    Then I click on the Checkbox Option 1 <element>

  Examples:
    | element |
    | option |

Scenario Outline: Click Checkbox
    Given I am on the Forms page
    Then I click on the Submit Button <element>

  Examples:
    | element |
    | option |
