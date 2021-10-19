<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Регистрация</MainTitle>
    <Form ref="form" @submit.prevent="handleSubmit" class="registration__form">
      <CustomInput
        v-model="formData.name"
        placeholder="Name"
        autocomplete="username"
        name="name"
        :rules="nameRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.email"
        placeholder="Email"
        autocomplete="email"
        name="email"
        :rules="emailRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.password"
        placeholder="Password"
        type="password"
        autocomplete="current-password"
        name="password"
        :rules="passwordRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.confirmPassword"
        placeholder="Confirm password"
        type="password"
        autocomplete="current-password"
        name="password"
        :rules="confirmPassword"
        class="registration__input"
      />
      <Button type="submit" class="registration__btn" :loading="loading">
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
  name: "Registration",
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
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: "Пароли не совпадают",
        }),
      ];
    },
  },
  methods: {
    ...mapActions("auth", ["register"]),
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();
      const { name, email, password } = this.formData;

      if (isFormValid) {
        try {
          this.loading = true;

          await this.register({
            name,
            email,
            password,
          });

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
.registration {
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
