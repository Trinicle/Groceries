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
      Name
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
      Name
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
      Name
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createGrocery = /* GraphQL */ `
  mutation CreateGrocery(
    $input: CreateGroceryInput!
    $condition: ModelGroceryConditionInput
  ) {
    createGrocery(input: $input, condition: $condition) {
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
export const updateGrocery = /* GraphQL */ `
  mutation UpdateGrocery(
    $input: UpdateGroceryInput!
    $condition: ModelGroceryConditionInput
  ) {
    updateGrocery(input: $input, condition: $condition) {
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
export const deleteGrocery = /* GraphQL */ `
  mutation DeleteGrocery(
    $input: DeleteGroceryInput!
    $condition: ModelGroceryConditionInput
  ) {
    deleteGrocery(input: $input, condition: $condition) {
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
export const createList = /* GraphQL */ `
  mutation CreateList(
    $input: CreateListInput!
    $condition: ModelListConditionInput
  ) {
    createList(input: $input, condition: $condition) {
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
export const updateList = /* GraphQL */ `
  mutation UpdateList(
    $input: UpdateListInput!
    $condition: ModelListConditionInput
  ) {
    updateList(input: $input, condition: $condition) {
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
export const deleteList = /* GraphQL */ `
  mutation DeleteList(
    $input: DeleteListInput!
    $condition: ModelListConditionInput
  ) {
    deleteList(input: $input, condition: $condition) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
