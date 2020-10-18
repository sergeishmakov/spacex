<template>
  <div id="app">
    <header>
      <img class="logo" src="@/assets/logo.png" width="300" />
      <div id="nav">
        <router-link to="/">Launches</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </header>
    <div class="content">
      <transition name="router-fade" tag="div" mode="out-in">
        <router-view />
      </transition>
    </div>
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

header {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;

  & > .logo {
    margin: 0 0 20px 30px;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: calc(100vw - 4px);

  & > .content {
    width: 70%;
    margin: auto;
    padding: 0 0 50px 0;
  }
}

#nav {
  height: 80px;
  display: flex;
  justify-content: center;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 20px;
  font-size: 20px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #f61e78;
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
