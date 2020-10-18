import gql from "graphql-tag";

export default gql`
  query LaunchesUpcoming($sort: String) {
    launchesUpcoming(sort: $sort) {
      id
      mission_name
      details
      launch_date_utc
      launch_site {
        site_name_long
      }
      launch_success
      rocket {
        rocket_name
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
