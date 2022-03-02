// import gql
import { gql } from '@apollo/client';

// look at the components to see what information needs to be pulled
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      savedBooks {
        _id
        bookId
        authors
        description
        title
        image
      }
    }
  }
`;