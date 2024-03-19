/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGrocery = /* GraphQL */ `
  query GetGrocery($id: ID!) {
    getGrocery(id: $id) {
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
export const listGroceries = /* GraphQL */ `
  query ListGroceries(
    $filter: ModelGroceryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroceries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        Recipe
        untitledfield
        Lists {
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
export const getListGrocery = /* GraphQL */ `
  query GetListGrocery($id: ID!) {
    getListGrocery(id: $id) {
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
          Username
          ListName
          Item
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
          Username
          ListName
          Item
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
          Username
          ListName
          Item
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
