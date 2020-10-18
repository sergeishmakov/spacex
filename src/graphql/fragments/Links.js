import gql from "graphql-tag";

export default gql`
  fragment Links on Launch {
    reddit_campaign
    reddit_launch
    wikipedia
  }
`;
