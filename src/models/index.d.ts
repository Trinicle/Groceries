import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerIngredient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ingredient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly recipes?: (RecipeIngredient | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIngredient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ingredient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly recipes: AsyncCollection<RecipeIngredient>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ingredient = LazyLoading extends LazyLoadingDisabled ? EagerIngredient : LazyIngredient

export declare const Ingredient: (new (init: ModelInit<Ingredient>) => Ingredient) & {
  copyOf(source: Ingredient, mutator: (draft: MutableModel<Ingredient>) => MutableModel<Ingredient> | void): Ingredient;
}

type EagerRecipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Picture?: string | null;
  readonly Timestamp?: number | null;
  readonly userID: string;
  readonly Ingredients?: (RecipeIngredient | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipe = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipe, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Picture?: string | null;
  readonly Timestamp?: number | null;
  readonly userID: string;
  readonly Ingredients: AsyncCollection<RecipeIngredient>;
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
  readonly Name?: string | null;
  readonly lists?: (ListGrocery | null)[] | null;
  readonly Checked?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGrocery = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Grocery, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly lists: AsyncCollection<ListGrocery>;
  readonly Checked?: boolean | null;
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
  readonly Username?: string | null;
  readonly Name?: string | null;
  readonly Groceries?: (ListGrocery | null)[] | null;
  readonly usersID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<List, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Username?: string | null;
  readonly Name?: string | null;
  readonly Groceries: AsyncCollection<ListGrocery>;
  readonly usersID: string;
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
  readonly Username?: string | null;
  readonly HashedPassword?: string | null;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly Favorites?: string | null;
  readonly Picture?: string | null;
  readonly Title?: string | null;
  readonly Lists?: (List | null)[] | null;
  readonly Recipes?: (Recipe | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Username?: string | null;
  readonly HashedPassword?: string | null;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly Favorites?: string | null;
  readonly Picture?: string | null;
  readonly Title?: string | null;
  readonly Lists: AsyncCollection<List>;
  readonly Recipes: AsyncCollection<Recipe>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerRecipeIngredient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecipeIngredient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ingredientId?: string | null;
  readonly recipeId?: string | null;
  readonly ingredient: Ingredient;
  readonly recipe: Recipe;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipeIngredient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecipeIngredient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ingredientId?: string | null;
  readonly recipeId?: string | null;
  readonly ingredient: AsyncItem<Ingredient>;
  readonly recipe: AsyncItem<Recipe>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RecipeIngredient = LazyLoading extends LazyLoadingDisabled ? EagerRecipeIngredient : LazyRecipeIngredient

export declare const RecipeIngredient: (new (init: ModelInit<RecipeIngredient>) => RecipeIngredient) & {
  copyOf(source: RecipeIngredient, mutator: (draft: MutableModel<RecipeIngredient>) => MutableModel<RecipeIngredient> | void): RecipeIngredient;
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