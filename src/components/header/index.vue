<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <router-link to="/">
          <Logo />
        </router-link>
        <AccountActions v-if="isLoggedIn" />
        <AuthActions v-else />
      </div>
    </Container>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import Container from "../shared/Container";
import Logo from "../Logo";
import AccountActions from "./AccountActions";
import AuthActions from "./AuthActions";

export default {
  name: "Header",
  components: {
    Container,
    Logo,
    AccountActions,
    AuthActions,
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: $secondary-color;
  padding: 16px 0;
  z-index: 100;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
