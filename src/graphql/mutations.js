/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGrocery = /* GraphQL */ `
  mutation CreateGrocery(
    $input: CreateGroceryInput!
    $condition: ModelGroceryConditionInput
  ) {
    createGrocery(input: $input, condition: $condition) {
      id
      Username
      ListName
      Item
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
      Username
      ListName
      Item
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
      Username
      ListName
      Item
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
      Recipe
      untitledfield
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
      Recipe
      untitledfield
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
      Recipe
      untitledfield
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
        Username
        ListName
        Item
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
        Username
        ListName
        Item
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
        Username
        ListName
        Item
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
