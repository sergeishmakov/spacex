import gql from "graphql-tag";

export default gql`
  query LaunchesPast($sort: String, $limit: Int) {
    launchesPast(sort: $sort, limit: $limit) {
      id
      mission_name
      details
      launch_date_utc
      launch_site {
        site_name_long
      }
      launch_success
      rocket {
        rocket {
          name
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
