import gql from "graphql-tag";

export default gql`
  fragment Ship on Launch {
    name
    id
  }
`;
