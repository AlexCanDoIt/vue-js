<template>
  <div id="app">
    <Notification />
    <div class="content">
      <AppHeader />
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import Notification from "./components/notifications";
import AppHeader from "./components/header";
import AppFooter from "./components/Footer";

export default {
  name: "App",
  components: {
    Notification,
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}
</style>
