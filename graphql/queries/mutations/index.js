export const LOGIN = `
mutation Login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      username
    }
  }
}
`