'use strict';

function addIngredient(recipe, ingredient, amount) {
  recipe[ingredient] = amount;
  return recipe;
}

function removeIngredient(recipe, ingredient) {
  delete recipe[ingredient];
  return recipe;
}

function updateIngredient(recipe, ingredient, amount) {
  recipe[ingredient] = amount;
  return recipe;
}

function readRecipe(recipe) {
  for (var ingredient in recipe) {
    console.log("this recipe calls for " + recipe[ingredient] + " of " + ingredient);
  }
}