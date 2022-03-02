// import graphql through apollo
import { gql } from '@apollo/client';

// will execute the loginUser mutation set up using Apollo Server.
export const LOGIN_USER = gql`
  mutation login(
    $email: String!, 
    $password: String!
  )
  {
    login(
      email: $email, 
      password: $password
    ) 
    {
      token
      user {
        _id
        username
      }
    }
  }
`;
// will execute the addUser mutation.
export const ADD_USER = gql`
  mutation addUser(
    $username: String!, 
    $email: String!, 
    $password: String!
  )
  {
    addUser(
      username: $username
      email: $email
      password: $password
    )
    {
      token
      user {
        _id
        username
      }
    }
  }
`;
// will execute the saveBook mutation.
export const SAVE_BOOK = gql`
  mutation saveBook(
    $input: bookInput!
)
{
  saveBook(
    input: $bookInput
  )
  {
    user {
      _id
      username
      savedBooks {
        _id
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
}
`;
// will execute the removeBook mutation.
export const REMOVE_BOOK = gql`
  mutation removeBook(
    $bookId: String!
)
{
  removeBook(
    bookId: $bookId
  )
  {
    user {
      _id
      username
      savedBooks {
        _id
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
}
`;