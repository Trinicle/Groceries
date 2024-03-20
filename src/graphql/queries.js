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
      name
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
        name
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
      name
      description
      userID
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
      users {
        items {
          id
          recipeId
          userId
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
        name
        description
        userID
        Ingredients {
          nextToken
          __typename
        }
        users {
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
export const recipesByUserID = /* GraphQL */ `
  query RecipesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        userID
        Ingredients {
          nextToken
          __typename
        }
        users {
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
      name
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
        name
        lists {
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
export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
      id
      name
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
      userID
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
        name
        Groceries {
          nextToken
          __typename
        }
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listsByUserID = /* GraphQL */ `
  query ListsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        Groceries {
          nextToken
          __typename
        }
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      hashedpassword
      firstname
      lastname
      picture
      title
      Lists {
        items {
          id
          name
          userID
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
          name
          description
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Favorites {
        items {
          id
          recipeId
          userId
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
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        hashedpassword
        firstname
        lastname
        picture
        title
        Lists {
          nextToken
          __typename
        }
        Recipes {
          nextToken
          __typename
        }
        Favorites {
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
        name
        createdAt
        updatedAt
        __typename
      }
      recipe {
        id
        name
        description
        userID
        Ingredients {
          nextToken
          __typename
        }
        users {
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
          name
          createdAt
          updatedAt
          __typename
        }
        recipe {
          id
          name
          description
          userID
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
          name
          createdAt
          updatedAt
          __typename
        }
        recipe {
          id
          name
          description
          userID
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
          name
          createdAt
          updatedAt
          __typename
        }
        recipe {
          id
          name
          description
          userID
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
export const getRecipeUser = /* GraphQL */ `
  query GetRecipeUser($id: ID!) {
    getRecipeUser(id: $id) {
      id
      recipeId
      userId
      recipe {
        id
        name
        description
        userID
        Ingredients {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        username
        hashedpassword
        firstname
        lastname
        picture
        title
        Lists {
          nextToken
          __typename
        }
        Recipes {
          nextToken
          __typename
        }
        Favorites {
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
export const listRecipeUsers = /* GraphQL */ `
  query ListRecipeUsers(
    $filter: ModelRecipeUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipeUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        recipeId
        userId
        recipe {
          id
          name
          description
          userID
          createdAt
          updatedAt
          __typename
        }
        user {
          id
          username
          hashedpassword
          firstname
          lastname
          picture
          title
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
export const recipeUsersByRecipeId = /* GraphQL */ `
  query RecipeUsersByRecipeId(
    $recipeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipeUsersByRecipeId(
      recipeId: $recipeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeId
        userId
        recipe {
          id
          name
          description
          userID
          createdAt
          updatedAt
          __typename
        }
        user {
          id
          username
          hashedpassword
          firstname
          lastname
          picture
          title
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
export const recipeUsersByUserId = /* GraphQL */ `
  query RecipeUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipeUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeId
        userId
        recipe {
          id
          name
          description
          userID
          createdAt
          updatedAt
          __typename
        }
        user {
          id
          username
          hashedpassword
          firstname
          lastname
          picture
          title
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
        name
        lists {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      list {
        id
        name
        Groceries {
          nextToken
          __typename
        }
        userID
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
          name
          createdAt
          updatedAt
          __typename
        }
        list {
          id
          name
          userID
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
          name
          createdAt
          updatedAt
          __typename
        }
        list {
          id
          name
          userID
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
          name
          createdAt
          updatedAt
          __typename
        }
        list {
          id
          name
          userID
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
