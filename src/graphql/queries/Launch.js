import gql from "graphql-tag";

export default gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      mission_id
      details
      launch_date_utc
      launch_site {
        site_name_long
      }
      launch_success
      rocket {
        rocket {
          name
          description
          company
          country
        }
      }
      links {
        reddit_campaign
        reddit_launch
        wikipedia
      }
      tentative_max_precision
      launch_date_local
      ships {
        name
        id
      }
    }
  }
`;
