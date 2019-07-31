Feature: Check that a context can be loaded

    Description:
        Load a context

    Background:
        Given the 'robert' context

    Scenario: "testing context"
        Then testUser has email of 'robert.price@rnr.com'

          