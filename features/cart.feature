@cart
Feature: Shopping cart

  Background:
    Given I am on the shop home page

  @smoke
  Scenario: Add two products and apply a coupon
    When I add these products to the cart:
      | product          |
      | RGB Gaming Mouse |
      | 1080p Webcam     |
    Then the cart badge should show 2
    When I open the cart
    Then the cart should contain:
      | product          |
      | RGB Gaming Mouse |
      | 1080p Webcam     |
    When I apply the coupon "SAVE10"
    Then the coupon message should be "Coupon SAVE10 applied."

  Scenario: An invalid coupon is rejected
    When I add these products to the cart:
      | product          |
      | RGB Gaming Mouse |
    And I open the cart
    And I apply the coupon "BOGUS"
    Then the coupon message should be "This coupon code is not valid."