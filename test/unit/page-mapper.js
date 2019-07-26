const tap = require('tap')
const { PageMapper } = require('../../').string

// Instantiate the PageMapper class

const firstTest = new PageMapper('unit-test-runner', 'Longest Dinosaur Name')
const secondTest = new PageMapper('unit-test-runner', 'Dino babies')

/**
 * Check that the first test has the correct path
 */
tap.equal(firstTest.path, '/micropachycephalosaurus')

/**
 * Check that the first test has no children
 */
tap.deepEqual(firstTest.children, [])
/**
 * Check that the second test has the correct path
 */
tap.equal(secondTest.path, '/dino-babies')

/**
 * Check that the first test has no children
 */
tap.deepEqual(secondTest.children, [ { names: [ 'Junior' ], path: '/baby-t-rex' },
{ names: [ 'The one that thinks John Hammon is her dad' ], path: '/baby-raptor' },
{ names: [ 'The one that kid rides in Jurassic World' ], path: '/baby-triceratops' } ])


