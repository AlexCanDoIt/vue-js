<template>
  <main class="login">
    <AuthSection>
      <LoginForm />
    </AuthSection>
  </main>
</template>

<script>
import AuthSection from "../components/auth/AuthSection";
import LoginForm from "../components/auth/login";

export default {
  name: "LoginPage",
  components: {
    AuthSection,
    LoginForm,
  },
};
</script>

<style lang="scss" scoped></style>
