<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Логин</MainTitle>
    <Form ref="form" @submit.prevent="handleSubmit" class="login__form">
      <CustomInput
        v-model="formData.email"
        placeholder="Email"
        autocomplete="email"
        name="email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        v-model="formData.password"
        placeholder="Password"
        type="password"
        autocomplete="current-password"
        name="password"
        :rules="passwordRules"
        class="login__input"
      />
      <Button type="submit" class="login__btn" :loading="loading">
        Вход
      </Button>
    </Form>
  </AuthContainer>
</template>

<script>
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
import { mapActions } from "vuex";
import AuthContainer from "../../auth/AuthContainer";
import Form from "../../shared/form";
import MainTitle from "../../shared/MainTitle";
import CustomInput from "../../shared/CustomInput";
import Button from "../../shared/Button";

export default {
  name: "Login",
  components: {
    AuthContainer,
    Form,
    MainTitle,
    CustomInput,
    Button,
  },
  data() {
    return {
      loading: false,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();

      if (isFormValid) {
        try {
          this.loading = true;

          await this.login(this.formData);

          this.$router.push({ name: "homepage" });

          form.reset();
        } catch (err) {
          this.$notify({
            type: "error",
            title: "Произошла ошибка",
            text: err.message,
          });
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
