# cucumber-common

Commonly used functions for our testing library, extends upon 'cucumber-boilerplate',

## Running the Tests

To run all of the tests use the `npm test` command.

### Non-browser Tests

Some of the tests relate to functions that carry out tasks like string manipulation. 

To run these tests, do this:

```shell
npm run test:non-browser
```

### wdio Tests (including e2e)

Many of the Cucumber Common functions are written to run in the context of wdio, in synchronous mode. In order to run an environment as close to this as possible some of the tests are written using Mocha, and executed with wdio as the test runner.

A Selenium Webserver needs to be running. The quickest way to launch one with a variety of drivers is like this:

```shell
docker run --rm -it -p 4444:4444 vvoyer/selenium-standalone
```

It can be left running whilst developing.

Once the Selenium server is available then run the wdio tests like this:

```shell
wdio --spec test/wdio/*.js test/mocha.wdio.conf.js
```

or like this:

```shell
npm run test:wdio
```

If you are running the e2e tests individually, ensure you have started the test server first by running `npm run test:start-server`

## Persona Engine

[Go here](./test-asset-generator/engines/persona-engine/README.md) for the persona engine docs