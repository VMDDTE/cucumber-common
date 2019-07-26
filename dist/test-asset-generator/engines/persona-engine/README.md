# Persona Engine

The persona engine is split into three parts:

1. The personae.json file in ../../assets/personae/personae.json
2. The `Actor` class in ./persona-engine/Actor.js
3. The Test Data Generator injector (TO DO)

## How to use the Persona Engine

The following code snippet will give you access to a persona.

```js
// the line below assumes you are calling require from the project root
const personaGetter = require('./persona-engine')
const persona = personaGetter('Test User')
```

## The Persona Object

The `personaGetter()` function returns a persona object which looks like the example below:

```json
{ 
  firstname: 'Test',
  lastname: 'User',
  fullname: 'Test User',
  gender: 'male',
  birthdate: '18/01/1986',
  jobtitle: 'Regulatory Affairs Manager',
  email: '1563803515-em@il.me',
  rcvsno: '0000000',
  roles: [ 
    { 
      '@type': 'Organization',
      name: 'Marketing Authorisations',
      email: 'em@il.me',
      telephone: '07000000000',
      role: 'Primary Administrator' 
    } 
  ] 
}
```

> **Note:** The email returned is namespaced with a timestamp and will change each time `personaGetter()` is called.

## Use within cucumber tests

The persona engine can be used in Cucumber tests, this is an example of use in a Gerkhin feature

```feature
Feature: Test that personas are working as expected

  Scenario Outline: Multiple personas are trying to log in
    Given I am logged in as <persona>
    Then I see the persona
  Examples:
  | persona |
  | Robert Price |
  | Test User |
```

This will retrive personas for `Robert Price` and `Test User`


## Test Data Generator

//TODO: This part needs to be written when it is complete







