import DuckduckgoPage from "./duckduckgo.page";
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit duckduckgo.com", () => {
  DuckduckgoPage.visit("https://duckduckgo.com/");
});

Then("I should see a search bar", () => {
  DuckduckgoPage.showInput("input");

  assert.deepEqual({}, {});
}); 
