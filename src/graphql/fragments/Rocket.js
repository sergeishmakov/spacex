import gql from "graphql-tag";

export default gql`
  fragment Rocket on Launch {
    rocket_name
  }
`;
