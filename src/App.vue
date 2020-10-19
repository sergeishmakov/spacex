<template>
  <div id="app">
    <transition name="router-fade" tag="div" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
p,
a {
  margin-top: 0;
  text-align: left;
}

a {
  cursor: pointer;
  color: #f61e78;

  &:hover,
  &:visited,
  &:active {
    text-decoration: underline;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: calc(100vw - 4px);
}

.router-fade-enter-active,
.router-fade-leave-active {
  transition: 0.5s ease;
}
.router-fade-enter,
.router-fade-leave-to {
  opacity: 0;
}

body::-webkit-scrollbar {
  width: 4px;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: darkgrey;
  outline: none;
}
</style>
