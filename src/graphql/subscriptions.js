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
      Name
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
      Name
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
      Name
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onUpdateRecipe(filter: $filter) {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onDeleteRecipe(filter: $filter) {
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
export const onCreateGrocery = /* GraphQL */ `
  subscription OnCreateGrocery($filter: ModelSubscriptionGroceryFilterInput) {
    onCreateGrocery(filter: $filter) {
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
export const onUpdateGrocery = /* GraphQL */ `
  subscription OnUpdateGrocery($filter: ModelSubscriptionGroceryFilterInput) {
    onUpdateGrocery(filter: $filter) {
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
export const onDeleteGrocery = /* GraphQL */ `
  subscription OnDeleteGrocery($filter: ModelSubscriptionGroceryFilterInput) {
    onDeleteGrocery(filter: $filter) {
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
export const onCreateList = /* GraphQL */ `
  subscription OnCreateList($filter: ModelSubscriptionListFilterInput) {
    onCreateList(filter: $filter) {
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
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList($filter: ModelSubscriptionListFilterInput) {
    onUpdateList(filter: $filter) {
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
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList($filter: ModelSubscriptionListFilterInput) {
    onDeleteList(filter: $filter) {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
