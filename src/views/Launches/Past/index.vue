<template>
  <div class="past-launches">
    <div v-if="loading" class="loading">Loading...</div>
    <LaunchesList v-else-if="launchesPast" v-bind:launches="launchesPast" />
    <div v-else class="no-result">List is empty</div>
    <a v-if="launchesPast && !moreLoading" @click="loadMoreClick">Load more</a>
    <h2 v-if="moreLoading" class="load-more">Loading...</h2>
  </div>
</template>

<script>
import LaunchesPast from "@/graphql/queries/LaunchesPast";
import { launchDecorator } from "@/utils/helpers";

export default {
  data: function() {
    return {
      loading: true,
      limit: 10,
      moreLoading: false
    };
  },
  apollo: {
    launchesPast: {
      query: LaunchesPast,
      variables() {
        return { sort: "launch_date_local", limit: this.limit };
      },
      update: data => launchDecorator(data.launchesPast, true),
      result: function(data) {
        this.loading = data.loading;
        this.moreLoading = data.loading;
      }
    }
  },
  methods: {
    loadMoreClick: function() {
      this.moreLoading = true;
      this.limit = this.limit + 10;
    }
  }
};
</script>

<style lang="scss">
.past-launches {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.load-more {
  color: #f61e78;
  font-weight: 600;
  text-align: center;
  margin: 10px 0;
}
</style>
