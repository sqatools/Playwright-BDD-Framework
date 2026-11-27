@login
Feature: Login
  As a shopper
  I want to log in to the SQA Shop
  So that I can see my account

  Background:
    Given I am on the login page

  @smoke
  Scenario: Successful login with the default user
    When I log in with the default user
    Then I should see the greeting "Hi, Test"

  Scenario Outline: Login fails for <case>
    When I log in as "<username>" with password "<password>"
    Then I should see the login error "<message>"

    Examples:
      | case           | username   | password | message                                         |
      | wrong password | testuser   | wrong    | Invalid username or password.                   |
      | locked account | lockeduser | Test@123 | This account is locked. Please contact support. |
      | empty fields   |            |          | Username and password are required.             |