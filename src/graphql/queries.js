/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIngredients = /* GraphQL */ `
  query GetIngredients($id: ID!) {
    getIngredients(id: $id) {
      id
      recipes {
        items {
          id
          ingredientsId
          recipeId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        recipes {
          nextToken
          __typename
        }
        Name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      Name
      Description
      usersID
      Ingredients {
        items {
          id
          ingredientsId
          recipeId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Description
        usersID
        Ingredients {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const recipesByUsersID = /* GraphQL */ `
  query RecipesByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipesByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Name
        Description
        usersID
        Ingredients {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGrocery = /* GraphQL */ `
  query GetGrocery($id: ID!) {
    getGrocery(id: $id) {
      id
      Nam
      lists {
        items {
          id
          groceryId
          listId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Checked
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGroceries = /* GraphQL */ `
  query ListGroceries(
    $filter: ModelGroceryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroceries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Nam
        lists {
          nextToken
          __typename
        }
        Checked
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
      id
      Username
      Name
      Groceries {
        items {
          id
          groceryId
          listId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      usersID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLists = /* GraphQL */ `
  query ListLists(
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Username
        Name
        Groceries {
          nextToken
          __typename
        }
        usersID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listsByUsersID = /* GraphQL */ `
  query ListsByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listsByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Username
        Name
        Groceries {
          nextToken
          __typename
        }
        usersID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      Username
      HashedPassword
      FirstName
      LastName
      Favorites
      Picture
      Title
      Lists {
        items {
          id
          Username
          Name
          usersID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Recipes {
        items {
          id
          Name
          Description
          usersID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Username
        HashedPassword
        FirstName
        LastName
        Favorites
        Picture
        Title
        Lists {
          nextToken
          __typename
        }
        Recipes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRecipeIngredients = /* GraphQL */ `
  query GetRecipeIngredients($id: ID!) {
    getRecipeIngredients(id: $id) {
      id
      ingredientsId
      recipeId
      ingredients {
        id
        recipes {
          nextToken
          __typename
        }
        Name
        createdAt
        updatedAt
        __typename
      }
      recipe {
        id
        Name
        Description
        usersID
        Ingredients {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRecipeIngredients = /* GraphQL */ `
  query ListRecipeIngredients(
    $filter: ModelRecipeIngredientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipeIngredients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ingredientsId
        recipeId
        ingredients {
          id
          Name
          createdAt
          updatedAt
          __typename
        }
        recipe {
          id
          Name
          Description
          usersID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const recipeIngredientsByIngredientsId = /* GraphQL */ `
  query RecipeIngredientsByIngredientsId(
    $ingredientsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeIngredientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipeIngredientsByIngredientsId(
      ingredientsId: $ingredientsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ingredientsId
        recipeId
        ingredients {
          id
          Name
          createdAt
          updatedAt
          __typename
        }
        recipe {
          id
          Name
          Description
          usersID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const recipeIngredientsByRecipeId = /* GraphQL */ `
  query RecipeIngredientsByRecipeId(
    $recipeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeIngredientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipeIngredientsByRecipeId(
      recipeId: $recipeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ingredientsId
        recipeId
        ingredients {
          id
          Name
          createdAt
          updatedAt
          __typename
        }
        recipe {
          id
          Name
          Description
          usersID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getListGrocery = /* GraphQL */ `
  query GetListGrocery($id: ID!) {
    getListGrocery(id: $id) {
      id
      groceryId
      listId
      grocery {
        id
        Nam
        lists {
          nextToken
          __typename
        }
        Checked
        createdAt
        updatedAt
        __typename
      }
      list {
        id
        Username
        Name
        Groceries {
          nextToken
          __typename
        }
        usersID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listListGroceries = /* GraphQL */ `
  query ListListGroceries(
    $filter: ModelListGroceryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListGroceries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groceryId
        listId
        grocery {
          id
          Nam
          Checked
          createdAt
          updatedAt
          __typename
        }
        list {
          id
          Username
          Name
          usersID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listGroceriesByGroceryId = /* GraphQL */ `
  query ListGroceriesByGroceryId(
    $groceryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelListGroceryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroceriesByGroceryId(
      groceryId: $groceryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groceryId
        listId
        grocery {
          id
          Nam
          Checked
          createdAt
          updatedAt
          __typename
        }
        list {
          id
          Username
          Name
          usersID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listGroceriesByListId = /* GraphQL */ `
  query ListGroceriesByListId(
    $listId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelListGroceryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroceriesByListId(
      listId: $listId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groceryId
        listId
        grocery {
          id
          Nam
          Checked
          createdAt
          updatedAt
          __typename
        }
        list {
          id
          Username
          Name
          usersID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
