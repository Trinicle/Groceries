// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ingredient, Recipe, Grocery, List, User, RecipeIngredient, ListGrocery } = initSchema(schema);

export {
  Ingredient,
  Recipe,
  Grocery,
  List,
  User,
  RecipeIngredient,
  ListGrocery
};