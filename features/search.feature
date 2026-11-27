@search
Feature: Product search

  Background:
    Given I am on the shop home page

  @smoke
  Scenario: Search finds a matching product
    When I search for "earbuds"
    Then I should see 1 product
    And I should see the product "Wireless Earbuds"

  Scenario: Search with no matches shows a message
    When I search for "zzzzqq"
    Then I should see 0 products
    And I should see the no results message