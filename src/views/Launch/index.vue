<template>
  <Spinner v-if="loading" class="spinner" line-fg-color="#f61e78" />
  <div
    v-else-if="launch"
    class="rocket-container"
    :style="{
      background: 'url(' + launch.largeBg + ')  center/cover no-repeat'
    }"
  >
    <p class="back-button" @click="goBack">Back</p>
    <p class="header-label">Mission</p>
    <h1 class="header-title">{{ launch.mission_name }}</h1>
    <div class="row">
      <div class="column">
        <p class="label">Rocket</p>
        <h1 class="title">{{ launch.rocket.rocket.name }}</h1>
        <p class="description">{{ launch.rocket.rocket.description }}</p>
        <p class="characters">{{ launch.rocket.rocket.company }}</p>
        <p class="characters">{{ launch.rocket.rocket.country }}</p>
      </div>
      <div class="column">
        <p class="label">Date</p>
        <p class="date">{{ launch.date }}</p>
        <p class="label">Launch site</p>
        <h1 class="launch-site">{{ launch.launch_site.site_name_long }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Launch from "@/graphql/queries/Launch";
import { launchDecorator } from "@/utils/helpers";
import Spinner from "vue-simple-spinner";

export default {
  name: "Launch",
  data: function() {
    return { loading: true, mission_id: null };
  },
  apollo: {
    launch: {
      query: Launch,
      variables() {
        return { id: this.$route.params.id };
      },
      update: data => launchDecorator([data.launch], true)[0],
      result: function(data) {
        this.loading = data.loading;
      }
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  components: {
    Spinner
  }
};
</script>

<style lang="scss">
.spinner {
  margin: 40px 0 0;
}
.rocket-container {
  width: 100vw;
  height: 100vh;
  padding: 50px 100px;
  position: relative;

  & > .back-button {
    font-family: "Rajdhani", sans-serif;
    color: white;
    font-size: 28px;
    position: absolute;
    top: 50px;
    left: 50px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      text-decoration: underline;
      color: #f61e78;
    }
  }

  & .date {
    font-family: "Rajdhani", sans-serif;
    font-size: 48px;
    color: white;
  }

  & .row {
    display: flex;
    justify-content: space-between;
  }

  & .launch-site {
    font-family: "Rajdhani", sans-serif;
    font-size: 36x;
    color: white;
  }

  & .characters {
    font-size: 22px;
    margin: 0;
    color: white;
  }

  & .column {
    display: flex;
    flex-direction: column;
    width: 40%;
  }

  & > .header-label {
    width: 100%;
    color: #f61e78;
    text-align: center;
    font-family: "Rajdhani", sans-serif;
    font-size: 36px;
    line-height: 100%;
    margin: 0;
  }
  & > .header-title {
    width: 100%;
    color: white;
    text-align: center;
    font-family: "Rajdhani", sans-serif;
    font-size: 72px;
    line-height: 100%;
  }

  & .label {
    font-style: italic;
    font-weight: 600;
    font-size: 28px;
    color: white;
    margin: 0;
  }

  & .title {
    font-size: 72px;
    color: #f61e78;
    margin: 0 0 20px 0;
    line-height: 100%;
  }

  & .description {
    font-size: 18px;
    color: white;
  }
}
</style>
