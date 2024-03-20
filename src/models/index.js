// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ingredients, Recipe, Grocery, List, User, RecipeIngredients, RecipeUser, ListGrocery } = initSchema(schema);

export {
  Ingredients,
  Recipe,
  Grocery,
  List,
  User,
  RecipeIngredients,
  RecipeUser,
  ListGrocery
};