/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGrocery = /* GraphQL */ `
  subscription OnCreateGrocery($filter: ModelSubscriptionGroceryFilterInput) {
    onCreateGrocery(filter: $filter) {
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
export const onUpdateGrocery = /* GraphQL */ `
  subscription OnUpdateGrocery($filter: ModelSubscriptionGroceryFilterInput) {
    onUpdateGrocery(filter: $filter) {
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
export const onDeleteGrocery = /* GraphQL */ `
  subscription OnDeleteGrocery($filter: ModelSubscriptionGroceryFilterInput) {
    onDeleteGrocery(filter: $filter) {
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
