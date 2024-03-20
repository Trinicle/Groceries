/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIngredients = /* GraphQL */ `
  subscription OnCreateIngredients(
    $filter: ModelSubscriptionIngredientsFilterInput
  ) {
    onCreateIngredients(filter: $filter) {
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
export const onUpdateIngredients = /* GraphQL */ `
  subscription OnUpdateIngredients(
    $filter: ModelSubscriptionIngredientsFilterInput
  ) {
    onUpdateIngredients(filter: $filter) {
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
export const onDeleteIngredients = /* GraphQL */ `
  subscription OnDeleteIngredients(
    $filter: ModelSubscriptionIngredientsFilterInput
  ) {
    onDeleteIngredients(filter: $filter) {
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onCreateRecipe(filter: $filter) {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onUpdateRecipe(filter: $filter) {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onDeleteRecipe(filter: $filter) {
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
export const onCreateGrocery = /* GraphQL */ `
  subscription OnCreateGrocery($filter: ModelSubscriptionGroceryFilterInput) {
    onCreateGrocery(filter: $filter) {
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
export const onUpdateGrocery = /* GraphQL */ `
  subscription OnUpdateGrocery($filter: ModelSubscriptionGroceryFilterInput) {
    onUpdateGrocery(filter: $filter) {
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
export const onDeleteGrocery = /* GraphQL */ `
  subscription OnDeleteGrocery($filter: ModelSubscriptionGroceryFilterInput) {
    onDeleteGrocery(filter: $filter) {
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
export const onCreateList = /* GraphQL */ `
  subscription OnCreateList($filter: ModelSubscriptionListFilterInput) {
    onCreateList(filter: $filter) {
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
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList($filter: ModelSubscriptionListFilterInput) {
    onUpdateList(filter: $filter) {
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
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList($filter: ModelSubscriptionListFilterInput) {
    onDeleteList(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateRecipeIngredients = /* GraphQL */ `
  subscription OnCreateRecipeIngredients(
    $filter: ModelSubscriptionRecipeIngredientsFilterInput
  ) {
    onCreateRecipeIngredients(filter: $filter) {
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
export const onUpdateRecipeIngredients = /* GraphQL */ `
  subscription OnUpdateRecipeIngredients(
    $filter: ModelSubscriptionRecipeIngredientsFilterInput
  ) {
    onUpdateRecipeIngredients(filter: $filter) {
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
export const onDeleteRecipeIngredients = /* GraphQL */ `
  subscription OnDeleteRecipeIngredients(
    $filter: ModelSubscriptionRecipeIngredientsFilterInput
  ) {
    onDeleteRecipeIngredients(filter: $filter) {
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
export const onCreateRecipeUser = /* GraphQL */ `
  subscription OnCreateRecipeUser(
    $filter: ModelSubscriptionRecipeUserFilterInput
  ) {
    onCreateRecipeUser(filter: $filter) {
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
export const onUpdateRecipeUser = /* GraphQL */ `
  subscription OnUpdateRecipeUser(
    $filter: ModelSubscriptionRecipeUserFilterInput
  ) {
    onUpdateRecipeUser(filter: $filter) {
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
export const onDeleteRecipeUser = /* GraphQL */ `
  subscription OnDeleteRecipeUser(
    $filter: ModelSubscriptionRecipeUserFilterInput
  ) {
    onDeleteRecipeUser(filter: $filter) {
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
export const onCreateListGrocery = /* GraphQL */ `
  subscription OnCreateListGrocery(
    $filter: ModelSubscriptionListGroceryFilterInput
  ) {
    onCreateListGrocery(filter: $filter) {
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
export const onUpdateListGrocery = /* GraphQL */ `
  subscription OnUpdateListGrocery(
    $filter: ModelSubscriptionListGroceryFilterInput
  ) {
    onUpdateListGrocery(filter: $filter) {
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
export const onDeleteListGrocery = /* GraphQL */ `
  subscription OnDeleteListGrocery(
    $filter: ModelSubscriptionListGroceryFilterInput
  ) {
    onDeleteListGrocery(filter: $filter) {
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
