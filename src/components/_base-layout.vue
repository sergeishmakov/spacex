<template>
  <div class="layout">
    <header>
      <img class="logo" src="@/assets/logo.png" width="300" />
      <div id="nav">
        <router-link to="/">Launches</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </header>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.layout {
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

  & > .content {
    width: 70%;
    margin: auto;
    padding: 0 0 50px 0;
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
}
</style>
