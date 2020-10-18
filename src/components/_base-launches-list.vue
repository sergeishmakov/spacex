<template>
  <div class="launches-list">
    <transition-group name="list" tag="div" class="list">
      <div
        :key="launch.id"
        v-for="launch in launches"
        class="list-item"
        title="This image is photo of the rocket"
      >
        <div class="content">
          <div class="header">
            <h3>{{ launch.mission_name }}</h3>
            <p>{{ launch.from_now }}</p>
          </div>
          <p class="date">{{ launch.date }}</p>
          <h1 class="rocket-name">{{ launch.rocket.rocket_name }}</h1>
        </div>
        <Button @click="detailsClick">Details</Button>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "LaunchesList",
  data: function() {
    return {
      isLoading: this.loading
    };
  },
  props: ["launches", "loading", "error"],
  methods: {
    detailsClick: function() {}
  }
};
</script>

<style lang="scss">
.launches-list {
  display: block;
  width: 100%;

  & .list-item {
    background: url(../assets/falcon9.jpg) center/cover no-repeat;
    width: 100%;
    margin: 0 0 10px 0;
    border: 1px solid #dbdbdb;
    box-shadow: 0 3px 5px 0 #dbdbdb;
    padding: 16px;
    border-radius: 8px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    color: white;

    & > .content {
      width: 100%;

      & > .header {
        display: flex;
        justify-content: space-between;

        & > h3 {
          text-align: left;
          margin: 0;
          color: #f61e78;
        }
      }

      & > .date {
        text-align: left;
        margin: 0;
        font-style: italic;
        font-size: 12px;
      }

      & > .rocket-name {
        margin: 20px 0 0;
        color: #dbdbdb;
      }
    }
  }
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }
  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
}
</style>
