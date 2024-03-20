import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerIngredients = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ingredients, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipes?: (RecipeIngredients | null)[] | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIngredients = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ingredients, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipes: AsyncCollection<RecipeIngredients>;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ingredients = LazyLoading extends LazyLoadingDisabled ? EagerIngredients : LazyIngredients

export declare const Ingredients: (new (init: ModelInit<Ingredients>) => Ingredients) & {
  copyOf(source: Ingredients, mutator: (draft: MutableModel<Ingredients>) => MutableModel<Ingredients> | void): Ingredients;
}

type EagerRecipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly userID: string;
  readonly Ingredients?: (RecipeIngredients | null)[] | null;
  readonly user?: (RecipeUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly userID: string;
  readonly Ingredients: AsyncCollection<RecipeIngredients>;
  readonly user: AsyncCollection<RecipeUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Recipe = LazyLoading extends LazyLoadingDisabled ? EagerRecipe : LazyRecipe

export declare const Recipe: (new (init: ModelInit<Recipe>) => Recipe) & {
  copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe>) => MutableModel<Recipe> | void): Recipe;
}

type EagerGrocery = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grocery, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly lists?: (ListGrocery | null)[] | null;
  readonly checked?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGrocery = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grocery, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly lists: AsyncCollection<ListGrocery>;
  readonly checked?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Grocery = LazyLoading extends LazyLoadingDisabled ? EagerGrocery : LazyGrocery

export declare const Grocery: (new (init: ModelInit<Grocery>) => Grocery) & {
  copyOf(source: Grocery, mutator: (draft: MutableModel<Grocery>) => MutableModel<Grocery> | void): Grocery;
}

type EagerList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<List, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly Groceries?: (ListGrocery | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<List, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly Groceries: AsyncCollection<ListGrocery>;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type List = LazyLoading extends LazyLoadingDisabled ? EagerList : LazyList

export declare const List: (new (init: ModelInit<List>) => List) & {
  copyOf(source: List, mutator: (draft: MutableModel<List>) => MutableModel<List> | void): List;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly hashedpassword?: string | null;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly picture?: string | null;
  readonly title?: string | null;
  readonly Lists?: (List | null)[] | null;
  readonly Recipes?: (Recipe | null)[] | null;
  readonly Favorites?: (RecipeUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly hashedpassword?: string | null;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly picture?: string | null;
  readonly title?: string | null;
  readonly Lists: AsyncCollection<List>;
  readonly Recipes: AsyncCollection<Recipe>;
  readonly Favorites: AsyncCollection<RecipeUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerRecipeIngredients = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecipeIngredients, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ingredientsId?: string | null;
  readonly recipeId?: string | null;
  readonly ingredients: Ingredients;
  readonly recipe: Recipe;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipeIngredients = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecipeIngredients, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ingredientsId?: string | null;
  readonly recipeId?: string | null;
  readonly ingredients: AsyncItem<Ingredients>;
  readonly recipe: AsyncItem<Recipe>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RecipeIngredients = LazyLoading extends LazyLoadingDisabled ? EagerRecipeIngredients : LazyRecipeIngredients

export declare const RecipeIngredients: (new (init: ModelInit<RecipeIngredients>) => RecipeIngredients) & {
  copyOf(source: RecipeIngredients, mutator: (draft: MutableModel<RecipeIngredients>) => MutableModel<RecipeIngredients> | void): RecipeIngredients;
}

type EagerRecipeUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecipeUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipeId?: string | null;
  readonly userId?: string | null;
  readonly recipe: Recipe;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipeUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecipeUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipeId?: string | null;
  readonly userId?: string | null;
  readonly recipe: AsyncItem<Recipe>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RecipeUser = LazyLoading extends LazyLoadingDisabled ? EagerRecipeUser : LazyRecipeUser

export declare const RecipeUser: (new (init: ModelInit<RecipeUser>) => RecipeUser) & {
  copyOf(source: RecipeUser, mutator: (draft: MutableModel<RecipeUser>) => MutableModel<RecipeUser> | void): RecipeUser;
}

type EagerListGrocery = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ListGrocery, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groceryId?: string | null;
  readonly listId?: string | null;
  readonly grocery: Grocery;
  readonly list: List;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyListGrocery = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ListGrocery, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groceryId?: string | null;
  readonly listId?: string | null;
  readonly grocery: AsyncItem<Grocery>;
  readonly list: AsyncItem<List>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ListGrocery = LazyLoading extends LazyLoadingDisabled ? EagerListGrocery : LazyListGrocery

export declare const ListGrocery: (new (init: ModelInit<ListGrocery>) => ListGrocery) & {
  copyOf(source: ListGrocery, mutator: (draft: MutableModel<ListGrocery>) => MutableModel<ListGrocery> | void): ListGrocery;
}