<template>
  <div v-if="loading" class="loading">Loading...</div>
  <LaunchesList
    v-else-if="launchesUpcoming"
    v-bind:launches="launchesUpcoming"
  />
  <div v-else class="no-result">List is empty</div>
</template>

<script>
import LaunchesUpcoming from "@/graphql/queries/LaunchesUpcoming";
import { launchDecorator } from "@/utils/helpers";

export default {
  data: function() {
    return { loading: true };
  },
  apollo: {
    launchesUpcoming: {
      query: LaunchesUpcoming,
      update: data => launchDecorator(data.launchesUpcoming),
      result: function(data) {
        this.loading = data.loading;
      },
      variables: { sort: "launch_date_local" }
    }
  }
};
</script>
;
