/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIngredients = /* GraphQL */ `
  mutation CreateIngredients(
    $input: CreateIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    createIngredients(input: $input, condition: $condition) {
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
export const updateIngredients = /* GraphQL */ `
  mutation UpdateIngredients(
    $input: UpdateIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    updateIngredients(input: $input, condition: $condition) {
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
export const deleteIngredients = /* GraphQL */ `
  mutation DeleteIngredients(
    $input: DeleteIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    deleteIngredients(input: $input, condition: $condition) {
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
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createGrocery = /* GraphQL */ `
  mutation CreateGrocery(
    $input: CreateGroceryInput!
    $condition: ModelGroceryConditionInput
  ) {
    createGrocery(input: $input, condition: $condition) {
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
export const updateGrocery = /* GraphQL */ `
  mutation UpdateGrocery(
    $input: UpdateGroceryInput!
    $condition: ModelGroceryConditionInput
  ) {
    updateGrocery(input: $input, condition: $condition) {
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
export const deleteGrocery = /* GraphQL */ `
  mutation DeleteGrocery(
    $input: DeleteGroceryInput!
    $condition: ModelGroceryConditionInput
  ) {
    deleteGrocery(input: $input, condition: $condition) {
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
export const createList = /* GraphQL */ `
  mutation CreateList(
    $input: CreateListInput!
    $condition: ModelListConditionInput
  ) {
    createList(input: $input, condition: $condition) {
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
export const updateList = /* GraphQL */ `
  mutation UpdateList(
    $input: UpdateListInput!
    $condition: ModelListConditionInput
  ) {
    updateList(input: $input, condition: $condition) {
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
export const deleteList = /* GraphQL */ `
  mutation DeleteList(
    $input: DeleteListInput!
    $condition: ModelListConditionInput
  ) {
    deleteList(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createRecipeIngredients = /* GraphQL */ `
  mutation CreateRecipeIngredients(
    $input: CreateRecipeIngredientsInput!
    $condition: ModelRecipeIngredientsConditionInput
  ) {
    createRecipeIngredients(input: $input, condition: $condition) {
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
export const updateRecipeIngredients = /* GraphQL */ `
  mutation UpdateRecipeIngredients(
    $input: UpdateRecipeIngredientsInput!
    $condition: ModelRecipeIngredientsConditionInput
  ) {
    updateRecipeIngredients(input: $input, condition: $condition) {
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
export const deleteRecipeIngredients = /* GraphQL */ `
  mutation DeleteRecipeIngredients(
    $input: DeleteRecipeIngredientsInput!
    $condition: ModelRecipeIngredientsConditionInput
  ) {
    deleteRecipeIngredients(input: $input, condition: $condition) {
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
export const createRecipeUser = /* GraphQL */ `
  mutation CreateRecipeUser(
    $input: CreateRecipeUserInput!
    $condition: ModelRecipeUserConditionInput
  ) {
    createRecipeUser(input: $input, condition: $condition) {
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
export const updateRecipeUser = /* GraphQL */ `
  mutation UpdateRecipeUser(
    $input: UpdateRecipeUserInput!
    $condition: ModelRecipeUserConditionInput
  ) {
    updateRecipeUser(input: $input, condition: $condition) {
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
export const deleteRecipeUser = /* GraphQL */ `
  mutation DeleteRecipeUser(
    $input: DeleteRecipeUserInput!
    $condition: ModelRecipeUserConditionInput
  ) {
    deleteRecipeUser(input: $input, condition: $condition) {
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
export const createListGrocery = /* GraphQL */ `
  mutation CreateListGrocery(
    $input: CreateListGroceryInput!
    $condition: ModelListGroceryConditionInput
  ) {
    createListGrocery(input: $input, condition: $condition) {
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
export const updateListGrocery = /* GraphQL */ `
  mutation UpdateListGrocery(
    $input: UpdateListGroceryInput!
    $condition: ModelListGroceryConditionInput
  ) {
    updateListGrocery(input: $input, condition: $condition) {
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
export const deleteListGrocery = /* GraphQL */ `
  mutation DeleteListGrocery(
    $input: DeleteListGroceryInput!
    $condition: ModelListGroceryConditionInput
  ) {
    deleteListGrocery(input: $input, condition: $condition) {
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
