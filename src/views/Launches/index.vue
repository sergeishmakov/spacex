<template>
  <div class="home">
    <div class="controls">
      <transition name="title-fade" mode="out-in">
        <component v-bind:is="currentTitleComponent" class="title" />
      </transition>
      <div>
        <button
          v-for="tab in tabs"
          v-bind:key="tab"
          v-bind:class="['tab-button', { active: currentTab === tab }]"
          v-on:click="currentTab = tab"
        >
          {{ tab }}
        </button>
      </div>
    </div>
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="currentTabComponent" class="tab" />
    </transition>
  </div>
</template>

<script>
import Upcoming from "./Upcoming";
import Past from "./Past";
import UpcomingTitle from "./Upcoming/Title";
import PastTitle from "./Past/Title";

export default {
  name: "Launches",
  data: function() {
    return {
      currentTab: "Upcoming",
      tabs: ["Upcoming", "Past"]
    };
  },
  computed: {
    currentTabComponent: function() {
      return this.currentTab;
    },
    currentTitleComponent: function() {
      return this.currentTab + "Title";
    }
  },
  components: { Upcoming, Past, UpcomingTitle, PastTitle }
};
</script>

<style lang="scss">
.home {
  & > .controls {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  & .title {
    margin: 0;
    overflow: hidden;
    text-align: left;
    color: #f61e78;
  }
}

.tab-button {
  padding: 6px 10px;
  color: #2c3e50;
  border-radius: 0;
  border: 0;
  cursor: pointer;
  background: transparent;
  margin-bottom: -1px;
  margin-right: -1px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 1px solid #f61e78;
  }

  &:focus {
    outline: none;
  }

  &.active {
    border-bottom: 2px solid #f61e78;
  }
}

.tab {
  padding: 20px 10px 10px;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}

.title-fade-enter-active,
.title-fade-leave-active {
  transition: 0.5s ease;
}
.title-fade-enter,
.title-fade-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>
